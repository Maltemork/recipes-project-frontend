import { useAuth } from "./security/AuthProvider";
import { addCategory } from "./services/apiFacade";

export default function Admin() {
  const auth = useAuth();

  async function newCategory(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const submittedCategory = (
      document.getElementById("category") as HTMLInputElement
    ).value;
    const categoryObject = { name: submittedCategory };
    alert("New category added: " + submittedCategory);
    addCategory(categoryObject);
  }

  if (!auth.isLoggedInAs(["ADMIN"])) {
    return (
      <div>
        <h2>Admin</h2>
        <p>You must be an admin to view this page.</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Admin</h2>
        <p>Welcome to the admin page.</p>
        <p>Add a new category:</p>
        <form id="categoryForm">
          <input type="text" id="category" />
          <button onClick={newCategory}>Add</button>
        </form>
      </div>
    );
  }
}
