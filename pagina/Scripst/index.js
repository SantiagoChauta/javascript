var content= ['santiago','camilo','alex','kevin'];
var salon= {
  alto:6,
  ancho:8,
  largo:10,
  getvolumen:function(){
    return this.alto*this.ancho*this.largo;
    },
  material:'carton',
  contenido:content
  };
for (var i = 0; i < salon.contenido.length; i++) {
  alert(salon.contenido[i]);
}
alert("El volumen es: "+ salon.getvolumen());
