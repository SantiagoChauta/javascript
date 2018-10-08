var acuario={
  nemo:{tipo: 'pescado', especie:'clownfish',longitud:4.1},
  dory:{tipo:'pescado', especie:'blue tang', longitud: 6.2},
  peach:{tipo:'entorno', especie:'starfish', longitud:5.3},
  agregarObjeto:function(nombre,tipo,especie,longitud){
    this[nombre]={tipo:tipo,especie:especie,longitud:longitud};
  }
  eliminarObjeto:function(nombre){
    delete this[nombre];
  }
}
acuario.agregarObjeto('chautik','tiburon','tigre',11.2);
alert("Se ha añadido el siguiente pez al acuario: Tipo: "+acuario.chautik.tipo +" Especie: "+ acuario.chautik.especie +" Longitud: "+ acuario.chautik.longitud);
for (var objeto in acuario) {
  console.log(objeto);
}
