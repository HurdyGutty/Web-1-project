const SUPABASE_URL = "https://yzdwxiwzwzlxjzcqvgby.supabase.co"
const SUPABASE_ANON_KEY = "sb_publishable_9tLEQxZxGdmVLOoitK7VWw_BFAWmTTM"

const { createClient } = supabase;
const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function renderView(templateId, viewId, data) {

    let source = document.querySelector(`#${templateId}`).innerHTML;
    let template = Handlebars.compile(source);
    document.querySelector(`#${viewId}`).innerHTML = template({ data });
}

function handleLogoutButton() {
    document.querySelectorAll('.logout-btn').forEach((btn) => {
        btn.onclick = async () => {
            try {
                await supabaseLogout();
            } catch (error) {
                alert(`Logout Error: ${error.message}`);
            }
        };

    });
}

async function handleUpdateProfile(e) {
    e.preventDefault();
    
    const name = document.querySelector("#crud-modal #name").value;
    const id = document.querySelector("#crud-modal #id").value;
    const message = document.querySelector("#crud-modal #message");

    try {
        await updateUserProfile(id, name);
        message.innerText = "";
        document.querySelector("#crud-modal #close-btn").click();
    } catch (error) {
        console.error("Update User Error:", error);
        message.innerText = error.message;
    }
}

(async function initPage() {
    handleLogoutButton();
})();
