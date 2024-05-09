import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState("");
  const [image, setImage] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newStudent = {
      fullName,
      email,
      phone,
      program,
      image,
      graduationYear,
      graduated,
    };

    setStudents([...students, newStudent]);

    setFullName("");
    setEmail("");
    setPhone("");
    setProgram("");
    setImage("");
    setGraduationYear(2023);
    setGraduated(false);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      <form onSubmit={handleFormSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
            />
          </label>

          <label>
            Program
            <select
              name="program"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
            >
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Profile Image"
            />
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              value={graduationYear}
              onChange={(e) => setGraduationYear(e.target.value)}
              placeholder="Graduation Year"
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={graduated}
              onChange={(e) => setGraduated(e.target.checked)}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>

      <TableHeader />

      {students.map((student, index) => (
        <StudentCard key={index} {...student} />
      ))}
    </div>
  );
}

export default App;
