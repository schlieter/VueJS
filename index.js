var titulo = new Vue({
    el:"#titulo",
    data:{
        titulo:"Herramientas"
    }
});

var lista = new Vue({
    el:'#lista',
    data:{
        herramientas:[
            {herramienta: "destornillador", cantidad:5},
            {herramienta: "martillo", cantidad:2},
            {herramienta: "llave", cantidad:10},
            {herramienta: "lija", cantidad:0}
        ]},
    methods:{
        sumarCantidad: function(){
            alert("Estas agregando uno")
        }
    }
});