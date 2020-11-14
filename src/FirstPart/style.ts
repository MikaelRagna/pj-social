import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    landing:{
        justifyContent: 'center',
        alignItems: 'center'
    },

    body:{
        alignContent: 'center',

    },

    header:{
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 24,
        marginTop: 25,
        backgroundColor: '#004d00',
        color: '#fff',
        width: '100%',
        height: '5%'
    },

    main:{
        margin: 5,
        width: 350,
        height: 250
    },

    bttnImage:{
        marginHorizontal: 5,
        backgroundColor: '#000',
        borderRadius: 5,
        height: 165
       
    },

    images:{
        width:200,
        height: 165,
        
        borderRadius: 5,
        borderWidth: 5,
        borderColor: '#FF8C00',

        
    },

    aboutTitle:{
        textAlign: 'center',
        fontSize: 24,
        marginTop: 10,
        padding: '5%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#004d00',
        color: '#fff'
    },

    about:{
        textAlign:"justify",
        padding: '5%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#004d00',
        color: '#fff',

    },

    enrollment: {
        width: '100%',

        backgroundColor: '#fff',
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "column",
        textAlign: 'center',

        padding: '5%',

    },

    enrollmentTitle: {
        
        fontSize: 25,
        color: '#004d00',
    },

    enrollmentParagraph: {
        marginBottom: 32,
        marginTop: 32,
        color: '#004d00',
    },

    button: {
        width: '50%',
        height: '21%',

        borderColor:'#004d00',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 5,

    },

    buttonText: {
        color: '#004d00',
        textAlign: 'center',
        fontSize: 15,
        
    },

    /*CONTACT*/

    contact: {
        width: '100%',

        backgroundColor: '#004d00',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

        padding: '5%'
    },

    contactTitle: {
        color: '#fff',
        fontSize: 20,
    },

    contactText: {
        marginBottom: 16,
        marginTop: 16,
        color: '#fff',
    },

    /*FOOTER*/

    footer: {
        width: '100%',

        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        padding: '1%'
    },

    Icons: {
        width: 200,
        height: '100%',

        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: '25%',

        padding: '5%'
    }
    
})

export default styles;