export default class PriceFormatterUtils {

    public static formatPrice(amount: number) {
        // Asumo que siempre estamos en el site de Arg, por eso uso el separador de . 
        return '$ ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'); 
    }

}