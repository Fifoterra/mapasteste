var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AreaAptidao_Cassava_1 = new ol.format.GeoJSON();
var features_AreaAptidao_Cassava_1 = format_AreaAptidao_Cassava_1.readFeatures(json_AreaAptidao_Cassava_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaAptidao_Cassava_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaAptidao_Cassava_1.addFeatures(features_AreaAptidao_Cassava_1);
var lyr_AreaAptidao_Cassava_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaAptidao_Cassava_1, 
                style: style_AreaAptidao_Cassava_1,
                popuplayertitle: "AreaAptidao_Cassava",
                interactive: true,
    title: 'AreaAptidao_Cassava<br />\
    <img src="styles/legend/AreaAptidao_Cassava_1_0.png" /> Good Suitability<br />\
    <img src="styles/legend/AreaAptidao_Cassava_1_1.png" /> Average suitability<br />\
    <img src="styles/legend/AreaAptidao_Cassava_1_2.png" /> Low suitability<br />\
    <img src="styles/legend/AreaAptidao_Cassava_1_3.png" /> Not suitable<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_AreaAptidao_Cassava_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AreaAptidao_Cassava_1];
lyr_AreaAptidao_Cassava_1.set('fieldAliases', {'LC_1': 'LC_1', 'ZAE_Cassav': 'ZAE_Cassav', 'TS_Cassava': 'TS_Cassava', 'LC_Classif': 'LC_Classif', 'aptidao': 'aptidao', 'excluir': 'excluir', 'excluirKBA': 'excluirKBA', 'NovAptidao': 'NovAptidao', 'area_ha': 'area_ha', 'Cassava': 'Cassava', });
lyr_AreaAptidao_Cassava_1.set('fieldImages', {'LC_1': 'TextEdit', 'ZAE_Cassav': 'TextEdit', 'TS_Cassava': 'TextEdit', 'LC_Classif': 'Range', 'aptidao': 'Range', 'excluir': 'Range', 'excluirKBA': 'Range', 'NovAptidao': 'Range', 'area_ha': 'TextEdit', 'Cassava': 'TextEdit', });
lyr_AreaAptidao_Cassava_1.set('fieldLabels', {'LC_1': 'no label', 'ZAE_Cassav': 'no label', 'TS_Cassava': 'no label', 'LC_Classif': 'no label', 'aptidao': 'no label', 'excluir': 'no label', 'excluirKBA': 'no label', 'NovAptidao': 'no label', 'area_ha': 'no label', 'Cassava': 'no label', });
lyr_AreaAptidao_Cassava_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});