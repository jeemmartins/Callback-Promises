console.log("🥪 Synchronous 1");

setTimeout(() => console.log(` 🍅 Timeout 2`), 0);

Promise.resolve().then((_) => console.log("🍍 Promise"));

console.log("🥪 Synchronous 4");
