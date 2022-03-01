const euro = document.getElementById("euro");
const dollar = document.getElementById("dollar");
const pounce = document.getElementById("pounce");
const naira = document.getElementById("naira");
const indianRs = document.getElementById("indianRs");
const lankaRs = document.getElementById("lankaRs");
const saudiR = document.getElementById("saudiR");

function main(){
    euroToDollarToPounceToNairaToIndianRsToLankaRsToSaudiR();
    dollarToEuroToPounceToNairaToIndianRsToLankaRsToSaudiR();
    PounceToEuroToDollarToNairaToIndianRsToLankaRsToSaudiR();
    nairaToEuroToDollarToPounceToIndianRsToLankaRsToSaudiR();
    indianRsToEuroToDollarToPounceToNairanairaToLankaRsToSaudiR();
    lankaRsToEuroToDollarToPounceToNairaToIndianRsToSaudiR();
    saudiRToEuroToDollarToPounceToNairaToIndianRslankaRs();
}
main();


euro.addEventListener("input", euroToDollarToPounceToNairaToIndianRsToLankaRsToSaudiR);
    function euroToDollarToPounceToNairaToIndianRsToLankaRsToSaudiR(){
        const eu = parseFloat (euro.value);
        const dl =Math.round (1.18*eu);
        const pn = Math.round(0.90*eu);
        const nr =Math.round (457.40*eu);
        const ir = Math.round(86.89*eu);
        const lr = Math.round(218.56*eu);
        const sr = Math.round(4.43*eu);

        dollar.value = dl;
        pounce.value = pn;
        naira.value = nr;
        indianRs.value = ir;
        lankaRs.value = lr;
        saudiR.value = sr;
}
euroToDollarToPounceToNairaToIndianRsToLankaRsToSaudiR();

 dollar.addEventListener("input", dollarToEuroToPounceToNairaToIndianRsToLankaRsToSaudiR );
    function dollarToEuroToPounceToNairaToIndianRsToLankaRsToSaudiR(){
        const dl = parseFloat(dollar.value);
        const eu =Math.round (0.85*dl);
        const pn =Math.round (0.76*dl);
        const nr =Math.round (387.12*dl);
        const ir =Math.round (73.56*dl);
        const lr = Math.round (184.95*dl);
        const sr =Math.round (3.75*dl);

        euro.value = eu;
        pounce.value = pn;
        naira.value = nr;
        indianRs.value = ir;
        lankaRs.value = lr;
        saudiR.value = sr;
    }
    dollarToEuroToPounceToNairaToIndianRsToLankaRsToSaudiR();

    pounce.addEventListener("input", PounceToEuroToDollarToNairaToIndianRsToLankaRsToSaudiR);
        function PounceToEuroToDollarToNairaToIndianRsToLankaRsToSaudiR(){
            const pn = parseFloat(pounce.value);
            const eu =Math.round( 1.11*pn);
            const dl =Math.round( 1.31*pn);
            const nr = Math.round(508.92*pn);
            const ir =Math.round( 96.66*pn);
            const lr =Math.round( 243.19*pn);
            const sr = Math.round( 4.93*pn);

            euro.value = eu;
            dollar.value = dl;
            naira.value = nr;
            indianRs.value = ir;
            lankaRs.value = lr;
            saudiR.value = sr;
  
        }
        PounceToEuroToDollarToNairaToIndianRsToLankaRsToSaudiR();

        naira.addEventListener("input", nairaToEuroToDollarToPounceToIndianRsToLankaRsToSaudiR);
            function nairaToEuroToDollarToPounceToIndianRsToLankaRsToSaudiR(){
                const nr = parseFloat(naira.value);
                const eu =Math.round (0.0022*nr);
                const dl =Math.round( 0.0026*nr);
                const pn  =Math.round (0.0020*nr);
                const ir = Math.round(0.19*nr) ;
                const lr =Math.round (0.48*nr);
                const sr = Math.round(0.0097*nr);

                euro.value = eu;
                dollar.value = dl;
                pounce.value = pn;
                indianRs.value = ir;
                lankaRs.value = lr;
                saudiR.value = sr;
  
            }
            nairaToEuroToDollarToPounceToIndianRsToLankaRsToSaudiR();

            indianRs.addEventListener("input", indianRsToEuroToDollarToPounceToNairanairaToLankaRsToSaudiR);
              function indianRsToEuroToDollarToPounceToNairanairaToLankaRsToSaudiR(){
                const ir = parseFloat(indianRs.value);
                const eu = Math.round(0.012*ir);
                const dl =Math.round (0.014*ir);
                const pn  = Math.round(0.010*ir);
                const nr = Math.round(5.27*ir) ;
                const lr =Math.round (2.52*ir);
                const sr = Math.round(0.051*ir);

                euro.value = eu;
                dollar.value = dl;
                pounce.value = pn;
                naira.value = nr;
                lankaRs.value = lr;
                saudiR.value = sr;
  
            }
            indianRsToEuroToDollarToPounceToNairanairaToLankaRsToSaudiR();

            lankaRs.addEventListener("input",lankaRsToEuroToDollarToPounceToNairaToIndianRsToSaudiR );
              function lankaRsToEuroToDollarToPounceToNairaToIndianRsToSaudiR(){
                const lr = parseFloat(lankaRs.value);
                const eu =Math.round(0.012*lr);
                const dl = Math.round(0.0054*lr);
                const pn  = Math.round(0.0041*lr);
                const nr = Math.round(2.09*lr) ;
                const ir =Math.round (0.40*lr);
                const sr =Math.round (0.020*lr);

                euro.value = eu;
                dollar.value = dl;
                pounce.value = pn;
                naira.value = nr;
                indianRs.value = ir;
                saudiR.value = sr;
  
              }
              lankaRsToEuroToDollarToPounceToNairaToIndianRsToSaudiR();

              saudiR.addEventListener("input", saudiRToEuroToDollarToPounceToNairaToIndianRslankaRs);
                function saudiRToEuroToDollarToPounceToNairaToIndianRslankaRs(){
                    const sr = parseFloat(saudiR.value);
                    const eu = Math.round(0.23*sr);
                    const dl =Math.round (0.27*sr);
                    const pn  = Math.round(0.20*sr);
                    const nr =  Math.round(103.21*sr) ;
                    const ir = Math.round(19.60*sr);
                    const lr =Math.round (49.31*sr);
     
                     euro.value = eu;
                     dollar.value = dl;
                     pounce.value = pn;
                     naira.value = nr;
                     indianRs.value = ir;
                     lankaRs.value = lr;
  
                }
                saudiRToEuroToDollarToPounceToNairaToIndianRslankaRs();

        





