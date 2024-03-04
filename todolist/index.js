var tasklist=document.querySelector('.task-list');

var addbutton=document.querySelector('#input-button');

var taskinput=document.querySelector('.taskinput');


function stylefornewtsak(newtask)
{
    newtask.style.display="flex";
    newtask.style.alignItems="center";
    newtask.style.justifyContent="space-between";
    newtask.style.width="93%";
    newtask.style.marginLeft="10px";
    // newtask.style.backgroundColor="red";
    newtask.style.height="50px";
    newtask.style.padding="0px 20px";
    newtask.style.borderRadius="20px";
}



addbutton.addEventListener("click",()=>
{

    if(taskinput.value==="")
    {
        alert("invalid input");
        return;
    }
   
    var newtask = document.createElement("div");
    var check_div = document.createElement("img");
    check_div.class="unchecked";
    var taskname= document.createElement("span");
    taskname.innerHTML=taskinput.value;
    check_div.style.width="28px";
    check_div.style.height="28px";
    check_div.style.borderRadius="50%";
    check_div.src="./images/unchecked.png";
    var cross_image_element=document.createElement("i");
    cross_image_element.classList.add("fa-solid", "fa-xmark");
    cross_image_element.style.cursor="pointer";
    newtask.append(check_div);
    newtask.append(taskname);
    newtask.append(cross_image_element);
    stylefornewtsak(newtask)
    tasklist.append(newtask);
    taskinput.value=""; 

    savedata();

});

tasklist.addEventListener("click",(e)=>
{
    var parentnode=e.target.parentNode;

     if(e.target==parentnode.children[0])
    {
        if(e.target.class=="unchecked")
        {
        
        e.target.src="./images/checked.png";
        parentnode.children[1].style.textDecoration="line-through";
        e.target.class="checked";

        }
        else 
        {
            e.target.src="./images/unchecked.png";
            parentnode.children[1].style.textDecoration="none";
        e.target.class="unchecked";

        }
        
    }
    else
    {

    var element=e.target;
    var curr_list=element.parentNode;
    curr_list.remove();
    }

    savedata();
});


function savedata()
{
    
    localStorage.setItem("data",tasklist.innerHTML);
}


function showTask()
{
    tasklist.innerHTML=localStorage.getItem("data");

}

showTask();


