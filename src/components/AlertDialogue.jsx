const AlertDialougue = () => {
  function closeAlert() {
    const alertContainer = document.getElementById("alert-container");
    alertContainer.classList.remove("visible");
  }
  return (
    <div class="alert-dialog" id="alert-container">
      <div class="alert-content">
        <button class="close-btn" onClick={closeAlert}>
          ×
        </button>
        <p>
          This page doesn’t exist and is not in the current project scope. Check
          back later!
        </p>
      </div>
    </div>
  );
};
export default AlertDialougue;
