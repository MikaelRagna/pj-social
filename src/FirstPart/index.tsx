import React, {useState} from 'react';
import { Image, Text, View, Linking} from 'react-native';
import {ScrollView, RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './style'

import banner_photo1 from '../images/banner_photo.png';
import banner_photo2 from '../images/banner_photo2.jpg';
import banner_photo3 from '../images/banner_photo3.jpg';

function LandingPage(){

    let actived;
    
    const [activedImage, setActivedImage] = useState(1);

    if(activedImage === 1){
        actived = banner_photo1;
    }

    if(activedImage === 2){
        actived = banner_photo2;
    }

    if(activedImage ===3){
        actived = banner_photo3;
    }

    

    return(
        <View style={styles.landing}>
            <ScrollView style={styles.body}>
                <Text style={styles.header}>
                    E.E.E.P Maria José Medeiros
                </Text>

                <Image style={styles.main} source={actived}/>

                <ScrollView horizontal pagingEnabled>
                    <RectButton onPress={() => {setActivedImage(1)}} style={styles.bttnImage}>
                        <Image blurRadius={5} style={styles.images} source={banner_photo1}/>
                    </RectButton>

                    <RectButton onPress={() => {setActivedImage(2)}} style={styles.bttnImage}>
                        <Image blurRadius={5} style={styles.images}source={banner_photo2}/>
                    </RectButton>

                    <RectButton onPress={() => {setActivedImage(3)}} style={styles.bttnImage}>
                        <Image blurRadius={5} style={styles.images} source={banner_photo3}/>
                    </RectButton>
                </ScrollView>

                <Text style={styles.aboutTitle}>SOBRE NÓS</Text>

                <Text style={styles.about}>
                A Escola de Ensino Fundamental e Médio Maria José Medeiros oficialmente surgiu sob o Decreto nº 11.493, em 17 de outubro de 1975, publicada no Diário Oficial de 30 de outubro de 1975, com a denominação de Escola de 1º Grau Maria José Medeiros.
                    Em 1973 funcionou como anexo do Instituto São Pedro na praia de Iracema, situada a rua Tigipié nº 274, após o advento da Lei 5692 de 11 de agosto de 1971, quando o governo arrendou 02 turmas de alunos para atender também outros alunos daquelas adjacências.
                    Em 1974, A Escola de 1º Grau Maria José Medeiros passou a funcionar em sede própria à rua Desembargador Lauro Nogueira, nº1240, na época Aldeota. Funcionou inicialmente com 03 turmas e com o Sistema Convencional e Televisão Educativa T.V.E. O Governador na época era o Cel. César Cals de Oliveira, cujo secretário de educação era o Cel. Murilo Waldeck Menezes de Serpa.
                    A referida sede da escola foi inaugurada em 05 de março de 1974, funcionando nos três turnos com séries terminais do ensino regular e TVE
                </Text>

                <View style={styles.enrollment}>
                    <Text style={styles.enrollmentTitle}> Venha fazer sua Matrícula </Text>
                    <Text style={styles.enrollmentParagraph}>
                        Nossas matrículas são feitas entrem novembro e janeiro,
                        venha fazer sua matrícula ou a do seu filho nesse período! Temos os cursos de:
                        Redes de Computadores, Administração e Enfermagem
                    </Text>


                    <RectButton onPress={Link} style={styles.button}>
                        <Text style={styles.buttonText}>Venha até nós!</Text>
                    </RectButton>
                </View>

                <View style={styles.contact}>
                    <Text style={styles.contactTitle}>Contatos</Text>
                    <Text style={styles.contactText}>Email: mmedeiros@escola.ce.gov.br</Text>
                    <Text style={styles.contactText}>Numéro: (85) 3101-3155</Text>
                </View>

                <View style={styles.footer}>
                    <Text>&copy; RedesTechMjm - 2020</Text>
                </View>

                <View style={styles.Icons}>
                    <Icon name="instagram" size={20} color={'#004d00'}/>
                    <Icon name="youtube-play" size={20} color={'#004d00'}/>
                    <Icon name="twitter" size={20} color={'#004d00'}/>
                </View>

            </ScrollView>
        </View>
    )
}

function Link() {
    Linking.openURL('https://www.google.com.br/maps/place/E.E.E.P.+Maria+José+Medeiros/@-3.7417375,-38.476105,17z/data=!3m1!4b1!4m5!3m4!1s0x7c7462e77fffeff:0xef340d2246554d5!8m2!3d-3.7417429!4d-38.4739109')
}

export default LandingPage;