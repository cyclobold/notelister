/**
 * - We will be using an immediately invoked function expression for this project
 * - All the code for this project will be wrapped inside the IIFE.
 * - An Immediately Invoked Function Expression (IIFE) runs immediately it is defined
 * 
 * - Assignments:
 *  1. Outline the benefits of using an IIFE in your projects
 *  2. What is the method of defining an IIFE?
 */

(function(){

    /**
     * SECTION 1.
     * 
     * Register all the ids, classes and elements here
     * This section registers all the Elements, Ids and Classes
     * 
    */
    const createNoteBtn = document.querySelector("#create-note-btn");
    const createNoteLink = document.querySelector("#create-note-link");
    const notesElement = document.querySelector(".notes-body");
    const notesInfo = document.querySelector(".notes-info");


    //Persistent mode
    //persisent_mode of true will save data to localStorage
    const persistent_mode = false;


    //Set the default ul Element
    ulElement = document.createElement("ul");
    ulElement.classList.add("list-group");
    ulElement.classList.add("list-group-flush");
    notesElement.appendChild(ulElement);
        
    /**
     * SECTION 2. : Functions Definitions
     * 
     * 
     * 
     *  Initialize the application by creating all the necessary elements
     * - The following elements will be created each time this function is called..
     * - 1. The Input Field for adding item to the menu..
     * - 2. 
     */
    function initializeApp(){

        //check if the area for adding notes is available
        if(notesElement.querySelector("ul").children.length == 0){
            //there are no notes at the moment
            notesInfo.innerHTML = `<div class="alert alert-info">
                                                You have not created any note
                                        </div>`;
        }


    }

    

    /**
     * Creates a new note
     * @param {string} note_title: the title of the note
     * @param {string} note_content: the content of the note
     */
    function createNote(note_title, note_content){
        // - this function will create a new note...
        // - every new note must have a time that it was created..
        // - to add the time, we will use the Date object...

        // Create the new date instance
        const date = new Date();

        //Now that we have the date instance, we will get the timestamp from this instance
        time_created = date.getTime();

        //Read more about Date object here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
        //Read a more simplified version here: https://www.w3schools.com/js/js_date_methods.asp

        //Now that we have the time created data..
        // ... we will add it to the data we will be adding to the DOM..

        let note_object = {
            note_title: note_title,
            note_content: note_content,
            time_created: time_created
        }


        //check the settings for how this note should be rendered..
        //This application comes with persistent_mode: which determines how the data should be saved

        if(persistent_mode == true){
            //save to localStorage
        }else{
            //render to the DOM normally
            listElement = document.createElement("li");
            listElement.classList.add("list-group-item");


            headerNote = document.createElement("h4");

            //to be comfortably able to pass our note object to the loadNote() function call, we need to convert it into a string
            //so we do just that belong
            const note_object_string = JSON.stringify(note_object);
           
            anchorWithin = document.createElement("a");
            //anchorWithin.href = "";
            anchorWithin.innerText = note_object.note_title;

            //give the anchorWithin an id
            anchorWithin.id = `anchor_${note_object.time_created}`;

            //anchorWithin.setAttribute("onclick", `return loadNote('${note_object_string}')`);

            headerNote.appendChild(anchorWithin);

            noteBody = document.createElement("div");
            noteBody.innerHTML = `<p class='p-3 bg-light'>${note_object.note_content}</p>`;

            //give the noteBody an id
            noteBody.id = `body_${note_object.time_created}`;
            noteBody.style.display = "none";

            //attach a div tag to this h4 element
            divElement = document.createElement("div");
            divElement.classList.add("col-md-6");
            divElement.classList.add("bg-dark");
            divElement.classList.add("text-light");
            divElement.classList.add("p-1");


            //add the small tag within the divElement
            smallElement = document.createElement("small");

            //create the anchor tag within the small tag
            editAnchor = document.createElement("a");
            editAnchor.href="#";
            editAnchor.innerText = "Edit Note";
            editAnchor.classList.add("edit-anchor");

            //create the delete anchor
            deleteAnchor = document.createElement("a");
            deleteAnchor.href = "#";
            deleteAnchor.innerText = "Delete Note";
            deleteAnchor.classList.add("delete-anchor");

            //append the smallELement to the divELement
            divElement.appendChild(smallElement);

            //append the editAnchor and deleteAnchor to the smallElement
            smallElement.appendChild(editAnchor);
            smallElement.appendChild(deleteAnchor);


            //append the headerNote and divElement...
            listElement.append(headerNote, noteBody, divElement); //Note the use of append() here... this will place headerNote and divElement side by side.




            //clear whatever error is inside the noteElement
            if(!notesElement.querySelector("ul")){
                notesElement.appendChild(ulElement);
    
                //add the note
                ulElement.appendChild(listElement);
            }else{
                ulElement.appendChild(listElement);
            }

            notesInfo.innerHTML = `<div class="alert alert-success">
                                                New note added
                                        </div>`;


        

         document.querySelector(`#anchor_${note_object.time_created}`).onclick = function(){

                if(document.querySelector(`#body_${note_object.time_created}`).style.display == "none"){
                    document.querySelector(`#body_${note_object.time_created}`).style.display = "";
                }else{
                    document.querySelector(`#body_${note_object.time_created}`).style.display = "none";
                }

            }
            

        }


    }


  
    /**
     * Shows the Modal for creating a new note
     */
    function showCreateNoteModal(){

        //This modal code comes from Bootstrap...
        //read more about Modals here: https://getbootstrap.com/docs/4.6/components/modal/

        //Note that we have given this modal code an id: create-note-modal

        const modalCode = `<div class="modal" tabindex="-1" id='create-note-modal'>
                            <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title">Create Note</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                <div class="modal-body">
                                <div>
                                    <form action='#' class='form'>
                                        <div class='form-group'>
                                            <label>Note Title</label>
                                            <textarea class="form-control" id="note-title"></textarea>
                                        </div>

                                    <div class='form-group'>
                                        <label>Note Content</label>
                                        <textarea class="form-control" id="note-content"></textarea>
                                    </div>
                                
                                    
                                    </form>
                                </div>
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-primary" id="save-new-note-btn">Save changes</button>
                                </div>
                            </div>
                            </div>
                        </div>`;

    //once we have the modal code inform of string, we need to add it to the DOM..

    //We will first create the place we want to put it in the DOM
    const placement = document.createElement("div");

    //then we give this newly created element an id..
    placement.id = "modal-loader";

    // We then add this to the body of the document
    document.body.appendChild(placement);

    // Once we add this to the document body, we need to show it

    
    placement.innerHTML = modalCode; //add the modalCode to the placement...

    //since Bootstrap uses jQuery, we will use it to load and trigger the modal
    //Please read more about Modals and Modals Events here: 
    // Modals - https://getbootstrap.com/docs/4.6/components/modal/
    // Modals Events - https://getbootstrap.com/docs/4.6/components/modal/#events

    // Read about how to trigger a Modal here: 
    // Trigger a Modal: https://getbootstrap.com/docs/4.6/components/modal/#methods

    $("#create-note-modal").modal("show"); //this code will trigger show the modal with the id of create-note-modal





    //IMPORTANT NOTE
    //Since we created the modal inside this function, the form inside the modal SHOULD be processed inside this function, 
    //if we attempt to process this form outside this function, code will not work

    //Process the Form
    const saveNewNoteBtn = document.querySelector("#save-new-note-btn");
    
    //once the button is clicked...
    saveNewNoteBtn.onclick = function(){
        //ensure that other fields are filled..
     
        let note_title = document.querySelector("#note-title").value.trim();
        let note_content = document.querySelector("#note-content").value.trim();

        if(note_title.length != 0 && note_content.length != 0){

            //call the createNote() function;
            createNote(note_title, note_content);

        }else{
            //show an error..
            //the two fields must be filled

            //We will be using Bootstrap Toasts to show this error notifications
            //Read more about Bootstrap Toasts here: https://getbootstrap.com/docs/4.6/components/toasts/

            //Note that we have given the toast an id of error-toast.

            const errorToastCode = `<div role="alert" aria-live="assertive" aria-atomic="true" data-delay="1500" class="toast bg-danger" id='error-toast'>
                        <div class="toast-header">
                        <strong class="mr-auto">Error</strong>
                        </div>
                        <div class="toast-body text-light">
                        Note Title and Content MUST be entered.
                        </div>
                    </div>`;

            
            //We need a place to place this errorCode

            //lets create the place in the DOM to place the errorCode which contains the Toast
            const toastPlacement = document.createElement("div");

            toastPlacement.id = "toast-loader"; //we give it an id of 'toast-loader'

            document.body.appendChild(toastPlacement); // we append it to the document body

            //put the errorCode which bears the toast code inside the toastPlacement
            toastPlacement.innerHTML = errorToastCode;

            //Then we need to trigger the Toast

            //Read more about Triggering Toasts here: https://getbootstrap.com/docs/4.6/components/toasts/#methods

            //Close all modals before showing the Toast
            //$(".modal").modal("hide");


            $("#error-toast").toast("show"); //this will show the Toast.


        }



    }


    }


   





    /**
     *  SECTION 3.
     *  Handles Events
     *  - This section of IIFE handles the creating listening to events
     *  - The following are the events being listened for:
     *  - 1. When the #create-note-btn is clicked
     * 
     * 
     */



    //When the #create-note-btn button is clicked
    createNoteBtn.onclick = function(){
        //when the #create-note-btn is clicked
        // a modal should popup for the user to create a new note
        // to make the modal pop up, we will put the modal inside a function call showCreateNoteModal() ...
        // then we will call that showCreateNoteModal() here within this function

        //call the showCreateNoteModal() function
        showCreateNoteModal();



    }

    createNoteLink.onclick = function(){
         //when the #create-note-btn is clicked
        // a modal should popup for the user to create a new note
        // to make the modal pop up, we will put the modal inside a function call showCreateNoteModal() ...
        // then we will call that showCreateNoteModal() here within this function

        //call the showCreateNoteModal() function
        showCreateNoteModal();
    }










    //start the app
    initializeApp();


}())