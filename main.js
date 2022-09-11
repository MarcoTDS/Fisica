function calcular(){
    var intervalos = [2 , 1.5 , 1.2 , 1 , 0.5 , 0.2 , 0.1 , 0.01];
    const xi = -2;
    const yi = 5;
    
    for(var t = 0; t < intervalos.length; t++){

        var D = document.getElementById(t+1);
        var VM = document.getElementById(t+9);
        var XY = document.getElementById(t+17);

        const x = 5 * (intervalos[t] * intervalos[t]) + 3 * intervalos[t] - 2;
        const y = 2 * (intervalos[t] * intervalos[t] * intervalos[t]) + 5;
        XY.innerHTML = "(" +x.toFixed(2)+ ";" +y.toFixed(2)+ ")";
        const Δx = x - xi;
        const Δy = y - yi;
        const d = Math.sqrt((Δx * Δx) + (Δy + Δy));
        D.innerHTML = d.toFixed(2)+'m';
        const vm = d / intervalos[t];
        VM.innerHTML = vm.toFixed(2)+'m/s';
        
    }   
    
    document.querySelector('.msg').innerText="Mereço um A em Capixaba :)";
}
