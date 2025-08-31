// Üliõpilaste Haldamise Süsteemi JavaScript

class StudentManagementSystem {
    constructor() {
        this.students = this.loadFromStorage('students') || [];
        this.grades = this.loadFromStorage('grades') || [];
        this.currentPage = 'home';
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateUI();
        this.showPage('home');
    }

    setupEventListeners() {
        // Navigeerimise nupud
        document.getElementById('homeBtn').addEventListener('click', () => this.showPage('home'));
        document.getElementById('studentsBtn').addEventListener('click', () => this.showPage('students'));
        document.getElementById('gradesBtn').addEventListener('click', () => this.showPage('grades'));
        document.getElementById('statisticsBtn').addEventListener('click', () => this.showPage('statistics'));

        // Üliõpilaste vorm
        document.getElementById('studentForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addStudent();
        });

        // Hinnete vorm
        document.getElementById('gradeForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addGrade();
        });

        // Otsing
        document.getElementById('searchBtn').addEventListener('click', () => this.searchStudents());
        document.getElementById('searchInput').addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                this.searchStudents();
            }
        });
    }

    showPage(pageId) {
        // Peida kõik leheküljed
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Eemalda aktiivsed navigeerimise nupud
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Näita valitud lehekülge
        document.getElementById(pageId).classList.add('active');
        document.getElementById(pageId + 'Btn').classList.add('active');

        this.currentPage = pageId;
        this.updateUI();
    }

    addStudent() {
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const studentId = document.getElementById('studentId').value.trim();

        // Valideerimised
        if (!this.validateName(firstName)) {
            this.showError('Vigane eesnimi');
            return;
        }

        if (!this.validateName(lastName)) {
            this.showError('Vigane perekonnanimi');
            return;
        }

        if (!this.validateEmail(email)) {
            this.showError('Vigane e-maili aadress');
            return;
        }

        if (!this.validateStudentId(studentId)) {
            this.showError('Vigane üliõpilaskood (peab olema 6 numbrit)');
            return;
        }

        // Kontrolli, kas üliõpilane juba eksisteerib
        if (this.students.some(s => s.studentId === studentId || s.email === email)) {
            this.showError('Üliõpilane selle koodi või e-mailiga juba eksisteerib');
            return;
        }

        const student = {
            id: Date.now(),
            firstName,
            lastName,
            email,
            studentId,
            registrationDate: new Date().toISOString().split('T')[0]
        };

        this.students.push(student);
        this.saveToStorage('students', this.students);
        
        document.getElementById('studentForm').reset();
        this.updateUI();
        this.showSuccess('Üliõpilane edukalt lisatud');
    }

    addGrade() {
        const studentId = document.getElementById('studentSelect').value;
        const subject = document.getElementById('subject').value.trim();
        const gradeValue = parseFloat(document.getElementById('gradeValue').value);
        const gradeDate = document.getElementById('gradeDate').value;

        if (!studentId) {
            this.showError('Palun vali üliõpilane');
            return;
        }

        if (!subject) {
            this.showError('Palun sisesta aine nimetus');
            return;
        }

        if (gradeValue < 1 || gradeValue > 5) {
            this.showError('Hinne peab olema vahemikus 1-5');
            return;
        }

        if (!gradeDate) {
            this.showError('Palun vali kuupäev');
            return;
        }

        const grade = {
            id: Date.now(),
            studentId: parseInt(studentId),
            subject,
            value: gradeValue,
            date: gradeDate
        };

        this.grades.push(grade);
        this.saveToStorage('grades', this.grades);
        
        document.getElementById('gradeForm').reset();
        this.updateUI();
        this.showSuccess('Hinne edukalt lisatud');
    }

    deleteStudent(studentId) {
        if (confirm('Kas oled kindel, et soovid selle üliõpilase kustutada?')) {
            this.students = this.students.filter(s => s.id !== studentId);
            this.grades = this.grades.filter(g => g.studentId !== studentId);
            
            this.saveToStorage('students', this.students);
            this.saveToStorage('grades', this.grades);
            
            this.updateUI();
            this.showSuccess('Üliõpilane kustutatud');
        }
    }

    deleteGrade(gradeId) {
        if (confirm('Kas oled kindel, et soovid selle hinde kustutada?')) {
            this.grades = this.grades.filter(g => g.id !== gradeId);
            this.saveToStorage('grades', this.grades);
            this.updateUI();
            this.showSuccess('Hinne kustutatud');
        }
    }

    searchStudents() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
        let filteredStudents = this.students;

        if (searchTerm) {
            filteredStudents = this.students.filter(student => 
                student.firstName.toLowerCase().includes(searchTerm) ||
                student.lastName.toLowerCase().includes(searchTerm) ||
                student.email.toLowerCase().includes(searchTerm) ||
                student.studentId.includes(searchTerm)
            );
        }

        this.displayStudents(filteredStudents);
    }

    updateUI() {
        this.updateStats();
        this.displayStudents();
        this.displayGrades();
        this.updateStudentSelect();
        this.updateStatistics();
    }

    updateStats() {
        const totalStudents = this.students.length;
        const avgGrade = this.calculateAverageGrade();
        const passPercentage = this.calculatePassPercentage();

        document.getElementById('totalStudents').textContent = totalStudents;
        document.getElementById('avgGrade').textContent = avgGrade.toFixed(1);
        document.getElementById('passPercentage').textContent = passPercentage + '%';
    }

    displayStudents(studentsToDisplay = this.students) {
        const container = document.getElementById('studentsList');
        
        if (studentsToDisplay.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #6c757d;">Ühtegi üliõpilast ei leitud</p>';
            return;
        }

        container.innerHTML = studentsToDisplay.map(student => `
            <div class="student-item">
                <div class="student-info">
                    <div class="student-name">${student.firstName} ${student.lastName}</div>
                    <div class="student-details">
                        ${student.email} | Kood: ${student.studentId} | Registreeritud: ${student.registrationDate}
                    </div>
                </div>
                <button class="delete-btn" onclick="sms.deleteStudent(${student.id})">Kustuta</button>
            </div>
        `).join('');
    }

    displayGrades() {
        const container = document.getElementById('gradesList');
        
        if (this.grades.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #6c757d;">Ühtegi hinnet ei leitud</p>';
            return;
        }

        const gradesWithStudents = this.grades.map(grade => {
            const student = this.students.find(s => s.id === grade.studentId);
            return { ...grade, student };
        }).filter(grade => grade.student);

        container.innerHTML = gradesWithStudents.map(grade => `
            <div class="grade-item">
                <div class="grade-info">
                    <div class="grade-subject">${grade.subject} - Hinne: ${grade.value}</div>
                    <div class="grade-details">
                        ${grade.student.firstName} ${grade.student.lastName} | ${grade.date}
                    </div>
                </div>
                <button class="delete-btn" onclick="sms.deleteGrade(${grade.id})">Kustuta</button>
            </div>
        `).join('');
    }

    updateStudentSelect() {
        const select = document.getElementById('studentSelect');
        select.innerHTML = '<option value="">Vali üliõpilane</option>';
        
        this.students.forEach(student => {
            const option = document.createElement('option');
            option.value = student.id;
            option.textContent = `${student.firstName} ${student.lastName} (${student.studentId})`;
            select.appendChild(option);
        });
    }

    updateStatistics() {
        this.updateGradeDistribution();
        this.updateDetailedStats();
    }

    updateGradeDistribution() {
        const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        
        this.grades.forEach(grade => {
            const roundedGrade = Math.round(grade.value);
            distribution[roundedGrade]++;
        });

        const total = this.grades.length;
        
        Object.keys(distribution).forEach(grade => {
            const count = distribution[grade];
            const percentage = total > 0 ? (count / total) * 100 : 0;
            
            const barElement = document.querySelector(`[data-grade="${grade}"] .bar`);
            const countElement = document.querySelector(`[data-grade="${grade}"] .count`);
            
            if (barElement && countElement) {
                barElement.style.setProperty('--width', percentage + '%');
                countElement.textContent = count;
            }
        });
    }

    updateDetailedStats() {
        if (this.grades.length === 0) {
            document.getElementById('highestGrade').textContent = '-';
            document.getElementById('lowestGrade').textContent = '-';
            document.getElementById('mostActive').textContent = '-';
            document.getElementById('popularSubject').textContent = '-';
            return;
        }

        const highest = Math.max(...this.grades.map(g => g.value));
        const lowest = Math.min(...this.grades.map(g => g.value));

        document.getElementById('highestGrade').textContent = highest;
        document.getElementById('lowestGrade').textContent = lowest;

        // Aktiivseima üliõpilase leidmine
        const studentGradeCounts = {};
        this.grades.forEach(grade => {
            studentGradeCounts[grade.studentId] = (studentGradeCounts[grade.studentId] || 0) + 1;
        });

        const mostActiveStudentId = Object.keys(studentGradeCounts).reduce((a, b) => 
            studentGradeCounts[a] > studentGradeCounts[b] ? a : b
        );

        const mostActiveStudent = this.students.find(s => s.id == mostActiveStudentId);
        document.getElementById('mostActive').textContent = mostActiveStudent ? 
            `${mostActiveStudent.firstName} ${mostActiveStudent.lastName}` : '-';

        // Populaarseima aine leidmine
        const subjectCounts = {};
        this.grades.forEach(grade => {
            subjectCounts[grade.subject] = (subjectCounts[grade.subject] || 0) + 1;
        });

        const popularSubject = Object.keys(subjectCounts).reduce((a, b) => 
            subjectCounts[a] > subjectCounts[b] ? a : b
        );

        document.getElementById('popularSubject').textContent = popularSubject || '-';
    }

    calculateAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, grade) => acc + grade.value, 0);
        return sum / this.grades.length;
    }

    calculatePassPercentage() {
        if (this.grades.length === 0) return 0;
        const passedGrades = this.grades.filter(grade => grade.value >= 3).length;
        return Math.round((passedGrades / this.grades.length) * 100);
    }

    // Valideerimise funktsioonid
    validateName(name) {
        return name.length >= 2 && /^[a-zA-ZäöüõÄÖÜÕ\s-]+$/.test(name);
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    validateStudentId(studentId) {
        return /^\d{6}$/.test(studentId);
    }

    // Salvestamise funktsioonid
    saveToStorage(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            this.showError('Viga andmete salvestamisel');
        }
    }

    loadFromStorage(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            this.showError('Viga andmete laadimisel');
            return null;
        }
    }

    // Sõnumite kuvamine
    showError(message) {
        this.showMessage(message, 'error');
    }

    showSuccess(message) {
        this.showMessage(message, 'success');
    }

    showMessage(message, type) {
        // Eemalda vanad sõnumid
        document.querySelectorAll('.error, .success').forEach(el => el.remove());
        
        const messageEl = document.createElement('div');
        messageEl.className = type;
        messageEl.textContent = message;
        
        const activeForm = document.querySelector(`#${this.currentPage} form`);
        if (activeForm) {
            activeForm.parentNode.insertBefore(messageEl, activeForm.nextSibling);
        } else {
            const activePage = document.querySelector('.page.active');
            activePage.appendChild(messageEl);
        }
        
        // Eemalda sõnum 5 sekundi pärast
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.remove();
            }
        }, 5000);
    }

    // Demo andmete lisamine
    addDemoData() {
        const demoStudents = [
            {
                id: 1,
                firstName: "Mari",
                lastName: "Tamm",
                email: "mari.tamm@ut.ee",
                studentId: "123456",
                registrationDate: "2024-01-15"
            },
            {
                id: 2,
                firstName: "Jaan",
                lastName: "Kask",
                email: "jaan.kask@ut.ee",
                studentId: "234567",
                registrationDate: "2024-01-20"
            },
            {
                id: 3,
                firstName: "Anna",
                lastName: "Mets",
                email: "anna.mets@ut.ee",
                studentId: "345678",
                registrationDate: "2024-02-01"
            }
        ];

        const demoGrades = [
            { id: 1, studentId: 1, subject: "Matemaatika", value: 4.5, date: "2024-03-15" },
            { id: 2, studentId: 1, subject: "Füüsika", value: 3.8, date: "2024-03-20" },
            { id: 3, studentId: 2, subject: "Matemaatika", value: 5.0, date: "2024-03-15" },
            { id: 4, studentId: 2, subject: "Keemia", value: 4.2, date: "2024-03-25" },
            { id: 5, studentId: 3, subject: "Bioloogia", value: 4.8, date: "2024-03-18" },
            { id: 6, studentId: 3, subject: "Füüsika", value: 2.5, date: "2024-03-22" }
        ];

        if (this.students.length === 0) {
            this.students = demoStudents;
            this.grades = demoGrades;
            this.saveToStorage('students', this.students);
            this.saveToStorage('grades', this.grades);
            this.updateUI();
        }
    }
}

// Süsteemi käivitamine
let sms;
document.addEventListener('DOMContentLoaded', () => {
    sms = new StudentManagementSystem();
    
    // Lisa demo andmed, kui süsteem on tühi
    setTimeout(() => {
        sms.addDemoData();
    }, 1000);
});

// Ekspordi funktsioon globaalsesse konteksti debugimiseks
window.sms = sms;
