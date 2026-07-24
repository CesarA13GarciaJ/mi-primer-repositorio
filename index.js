// Chiste geek: ¿Por qué los programadores prefieren el té?
// Porque el café se compila, pero el té se interpreta ☕

const amigos = ["Ana", "Jerson", "Carlos", "Marta"];

// Función para generar saludos personalizados
function saludarEquipo(nombres) {
  console.log("🚀 ¡Equipo, atentos! 🚀\n");
  
  nombres.forEach((nombre, index) => {
    const emojis = ["🔥", "💻", "🎯", "✨"];
    console.log(`${index + 1}. ${nombre} eres un crack ${emojis[index]}`);
  });
  
  console.log("\n🤝 ¡Todos juntos somos imbatibles!");
}

// Ejecutar la función
saludarEquipo(amigos);

// Bonus: un cálculo loco
const numeroMagico = 42;
const resultado = (numeroMagico * 3 - 6) / 3;
console.log(`\n🧙 El número mágico es: ${resultado} (¿lo pillaste?)`);
