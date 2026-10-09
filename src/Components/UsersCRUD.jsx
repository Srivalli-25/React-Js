import  { useEffect, useState } from "react";
import "./UsersCRUD.css";

export default function CRUD() {
const [user, setUser] = useState([]);
const [name, setName] = useState("");
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [website, setWebsite] = useState("");
const [city, setCity] = useState("");
const [editId, setEditId] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
    if (!res.ok) {
        throw new Error("Failed to fetch users");
    }
    return res.json();
    })
    .then((data) => {
      setUser(data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    });
  }, []);

  const handleSubmit = () => {
    if (
      !name.trim() ||
      !username.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !website.trim() ||
      !city.trim()
    ) {
      alert("Please fill all the fields");
      return;
    }

    if (editId === null) {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
          name: name.trim(),
          username: username.trim(),
          email: email.trim(),
          phone: phone.trim(),
          website: website.trim(),
          address: {
            city: city.trim(),
          },
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const newUser = {
            ...data,
            id: user.length + 1,
          };

          setUser([...user, newUser]);
          clearForm();
        })
        .catch(() => {
          alert("Failed to add user");
        });
    }

    else {
      fetch(`https://jsonplaceholder.typicode.com/users/${editId}`, {
        method: "PUT",
        body: JSON.stringify({
          id: editId,
          name: name.trim(),
          username: username.trim(),
          email: email.trim(),
          phone: phone.trim(),
          website: website.trim(),
          address: {
            city: city.trim(),
          },
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(
            user.map((person) =>
              person.id === editId ? data : person
            )
          );

          clearForm();
        })
        .catch(() => {
          alert("Failed to update user");
        });
    }
  };

  const handleEdit = (person) => {
    setEditId(person.id);
    setName(person.name);
    setUsername(person.username);
    setEmail(person.email);
    setPhone(person.phone);
    setWebsite(person.website);
    setCity(person.address?.city || "");
  };

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setUser((user) => {
          return user.filter((person) => person.id !== id);
        });
      })
      .catch(() => {
        alert("Failed to delete user");
      });
  };

  const clearForm = () => {
    setName("");
    setUsername("");
    setEmail("");
    setPhone("");
    setWebsite("");
    setCity("");
    setEditId(null);
  };

  if (loading) {
    return <h2 className="message">Loading users...</h2>;
  }

  if (error) {
    return <h2 className="error-message">{error}</h2>;
  }

  return (
    <div className="crud-container">
      <h1>Users CRUD Application</h1>

      <div className="form-container">
        <h2>{editId === null ? "Add User" : "Edit User"}</h2>

        <div className="form-grid">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="text"
            placeholder="Website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />

          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="form-buttons">
          <button className="submit-btn" onClick={handleSubmit}>
            {editId === null ? "Add User" : "Update User"}
          </button>

          {editId !== null && (
            <button className="cancel-btn" onClick={clearForm}>
              Cancel
            </button>
          )}
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {user.map((person) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.username}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
                <td>{person.website}</td>
                <td>{person.address?.city}</td>

                <td className="action-buttons">
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(person)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(person.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}