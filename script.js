const form=document.getElementById("create-task-form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const taskStatus=form.status.value;
    const taskInfo={
        title:form.title.value,
        description:form.description.value,
        developer:form.developer.value,
        estimate:form.estimate.value
    }
    console.log(taskInfo);
    
    // <div class="task-card" title="This is a dummy task">
    //       <h3>Chat Box</h3>
    //       <div>
    //         <span class="badge">3 Days</span>
    //         <span class="image">B</span>
    //       </div>
    //     </div>
    const taskCard=document.createElement("div");
    taskCard.className="task-card"
    taskCard.title=taskInfo.description;
    taskCard.innerHTML=`
    <h3>${taskInfo.title}</h3>
          <div>
            <span class="badge">${taskInfo.estimate} Days</span>
            <span class="image">${taskInfo.developer[0].toUpperCase()}</span>
          </div>
    `
    const taskcontainer=document.getElementById(taskStatus);
    taskcontainer.append(taskCard);
})
const modal=document.getElementById( "modal" );
function toggleModal(element){
  modal.classList.toggle("hide-modal");
  element.innerText=modal.classList.contains("hide-modal") ? "expand_less" : "expand_more"
};