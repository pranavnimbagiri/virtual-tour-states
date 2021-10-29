AFRAME.registerComponent("placesideview",{
    init:function(){
        this.createplace()
    },
tick:function(){
    const placeContainer=document.querySelector("#places-container")
    const {state}=placeContainer.getAttribute("tour")
    if (state==="view" || state==="change-view") {
        this.el.setAttribute("visible",true)
        
    } else{

        this.el.setAttribute("visible",false)
    }
},
createplace:function(){
    const sideviewcontainer=document.querySelector("#sideviewcontainer")
    var previousxposition=-150
    var previousyposition=30
    for (var index = 1; index <= 4; index++) {
        const position={
            x:(previousxposition += 50),
            y:(previousyposition += 2),
            z:-40
        }
        const entityEl=this.createplacethumbnail(position,index)
        sideviewcontainer.appendChild(entityEl)
    }
},
createplacethumbnail:function(position,id){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("id",`place-${id}`)
    entityEl.setAttribute("geometry",{primitive:"circle",radius:2.5})
    entityEl.setAttribute("material",{src:"./assets/helicopter.png",opacity:0.9})
    entityEl.setAttribute("posiition",position)
    entityEl.setAttribute("cursor-listener",{})
    return entityEl
}
})
