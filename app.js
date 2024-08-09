let project_data;

(async function getData(){
    const file = await fetch("/data.json");
    project_data = await file.json();
    console.log(project_data);
})();