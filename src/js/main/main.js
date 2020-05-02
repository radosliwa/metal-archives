
import { check } from './someModule';
let id;
function select_tab(id) {
    // remove selected class from all buttons
    document.querySelectorAll(".route").forEach(item => item.classList.remove('selected'));
    // select clicked element (visually)
    document.querySelectorAll("#" + id).forEach(item => item.classList.add('selected'));
}
function loadContent(id) {
    // Update text "Content loading for {id}..."
    // Of course, here you would do you content loading magic
    // Perhaps run Fetch API to update resources
    document.querySelector("#content").innerHTML = 'Content loading for /' + id + '...';
}
function push(event) {
    // Get id attribute of the box or button or link clicked
    let id = event.target.id;
    // Visually select the clicked button/tab/box
    select_tab(id);
    // Update Title in Window's Tab
    document.title = id; 
    // Load content for this tab/page
    loadContent(id);
    // Finally push state change to the address bar
    window.history.pushState({id}, `${id}`, `/page/${id}`);
}
window.onload = event => {
    // Add history push() event when boxes are clicked
    const arr = ['home','about','gallery','contact', 'help'];

    for(let route of arr){
        window[route].addEventListener("click", event => push(event))
    }

}
// Listen for PopStateEvent (Back or Forward buttons are clicked)
window.addEventListener("popstate", event => {
    // Grab the history state id
    let stateId = event.state.id;
    // Show clicked id in console (just for fun)
    console.log("stateId = ", stateId);
    // Visually select the clicked button/tab/box
    select_tab(stateId);
    // Load content for this tab/page
    loadContent(id);
});
document.querySelector('.purify').addEventListener('click',e => {
    history.pushState('myState','myState',window.location.origin)
    console.log('event state ',event.state )
    console.log('history: ',history.state )
})