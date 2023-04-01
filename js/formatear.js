export function formatearNumero(numero){

    const numeroAntiguo = numero;
    const sub1 = numeroAntiguo.substring(0,3);
    const sub2 = numeroAntiguo.substring(3,6);
    const sub3 = numeroAntiguo.substring(6,8);
    const sub4 = numeroAntiguo.substring(8,10);
    const numeroNuevo = [sub1,sub2,sub3,sub4].join(' ');

    return numeroNuevo;
}

