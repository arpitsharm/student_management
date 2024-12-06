document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const toggleMode = document.getElementById('toggleMode');
    const studentLink = document.getElementById('studentLink');
    const teacherLink = document.getElementById('teacherLink');
  
    // Mock Data
    let students = [];
    let teachers = [];
  
    // Function to load student registration page
    const loadStudentPage = () => {
      content.innerHTML = `
        <h1>Student Management</h1>
        <form id="studentForm">
          <label for="roll">Roll No:</label>
          <input type="text" id="roll" name="roll" required>
          
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
          
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
          
          <label for="class">Class:</label>
          <input type="text" id="class" name="class" required>
          
          <label for="address">Address:</label>
          <input type="text" id="address" name="address" required>
          
          <button type="submit">Add Student</button>
        </form>
        <div id="studentFrame">
          <h2>Student Records</h2>
          <table>
            <thead>
              <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Class</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="studentTable"></tbody>
          </table>
        </div>
      `;
  
      document.getElementById('studentForm').addEventListener('submit', handleStudentSubmit);
      renderStudents();
    };
  
    // Function to add/update a student
    const handleStudentSubmit = (e) => {
      e.preventDefault();
      const roll = document.getElementById('roll').value;
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const className = document.getElementById('class').value;
      const address = document.getElementById('address').value;
  
      const index = students.findIndex(student => student.roll === roll);
  
      if (index >= 0) {
        // Update existing student
        students[index] = { roll, name, email, class: className, address };
      } else {
        // Add new student
        students.push({ roll, name, email, class: className, address });
      }
  
      document.getElementById('studentForm').reset();
      renderStudents();
    };
  
    // Function to render student data in table
    const renderStudents = () => {
      const table = document.getElementById('studentTable');
      table.innerHTML = students.map((student) => `
        <tr>
          <td>${student.roll}</td>
          <td>${student.name}</td>
          <td>${student.email}</td>
          <td>${student.class}</td>
          <td>${student.address}</td>
          <td>
            <button class="update-btn" onclick="updateStudent('${student.roll}')">Update</button>
          </td>
        </tr>
      `).join('');
    };
  
    // Function to load data into form for updating
    window.updateStudent = (roll) => {
      const student = students.find(s => s.roll === roll);
      document.getElementById('roll').value = student.roll;
      document.getElementById('name').value = student.name;
      document.getElementById('email').value = student.email;
      document.getElementById('class').value = student.class;
      document.getElementById('address').value = student.address;
    };
  
    // Function to load teacher registration page
    const loadTeacherPage = () => {
      content.innerHTML = `
        <h1>Teacher Management</h1>
        <form id="teacherForm">
          <label for="id">ID:</label>
          <input type="text" id="id" name="id" required>
          
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
          
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
          
          <label for="classTeacher">Class Teacher:</label>
          <input type="text" id="classTeacher" name="classTeacher" required>
          
          <label for="address">Address:</label>
          <input type="text" id="address" name="address" required>
          
          <button type="submit">Add Teacher</button>
        </form>
        <div id="teacherFrame">
          <h2>Teacher Records</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Class Teacher</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="teacherTable"></tbody>
          </table>
        </div>
      `;
  
      document.getElementById('teacherForm').addEventListener('submit', handleTeacherSubmit);
      renderTeachers();
    };
  
    const handleTeacherSubmit = (e) => {
      e.preventDefault();
      const id = document.getElementById('id').value;
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const classTeacher = document.getElementById('classTeacher').value;
      const address = document.getElementById('address').value;
  
      const index = teachers.findIndex(teacher => teacher.id === id);
  
      if (index >= 0) {
        teachers[index] = { id, name, email, classTeacher, address };
      } else {
        teachers.push({ id, name, email, classTeacher, address });
      }
  
      document.getElementById('teacherForm').reset();
      renderTeachers();
    };
  
    const renderTeachers = () => {
      const table = document.getElementById('teacherTable');
      table.innerHTML = teachers.map((teacher) => `
        <tr>
          <td>${teacher.id}</td>
          <td>${teacher.name}</td>
          <td>${teacher.email}</td>
          <td>${teacher.classTeacher}</td>
          <td>${teacher.address}</td>
          <td>
            <button class="update-btn" onclick="updateTeacher('${teacher.id}')">Update</button>
          </td>
        </tr>
      `).join('');
    };
  
    window.updateTeacher = (id) => {
      const teacher = teachers.find(t => t.id === id);
      document.getElementById('id').value = teacher.id;
      document.getElementById('name').value = teacher.name;
      document.getElementById('email').value = teacher.email;
      document.getElementById('classTeacher').value = teacher.classTeacher;
      document.getElementById('address').value = teacher.address;
    };
  
    // Event listeners
    studentLink.addEventListener('click', (e) => {
      e.preventDefault();
      loadStudentPage();
    });
  
    teacherLink.addEventListener('click', (e) => {
      e.preventDefault();
      loadTeacherPage();
    });
  
    toggleMode.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      toggleMode.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
    });
  
    // Load default page
    loadStudentPage();
  });
  