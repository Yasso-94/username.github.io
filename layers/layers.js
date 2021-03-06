var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Etat_des_lieux1_1 = new ol.format.GeoJSON();
var features_Etat_des_lieux1_1 = format_Etat_des_lieux1_1.readFeatures(json_Etat_des_lieux1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Etat_des_lieux1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Etat_des_lieux1_1.addFeatures(features_Etat_des_lieux1_1);
var lyr_Etat_des_lieux1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Etat_des_lieux1_1, 
                style: style_Etat_des_lieux1_1,
                interactive: true,
                title: '<img src="styles/legend/Etat_des_lieux1_1.png" /> Etat_des_lieux1'
            });
var format_batiment_2 = new ol.format.GeoJSON();
var features_batiment_2 = format_batiment_2.readFeatures(json_batiment_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batiment_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batiment_2.addFeatures(features_batiment_2);
var lyr_batiment_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batiment_2, 
                style: style_batiment_2,
                interactive: true,
                title: '<img src="styles/legend/batiment_2.png" /> batiment'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Etat_des_lieux1_1.setVisible(true);lyr_batiment_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Etat_des_lieux1_1,lyr_batiment_2];
lyr_Etat_des_lieux1_1.set('fieldAliases', {'Id': 'Id', 'FID_1': 'FID_1', 'Shape__': 'Shape__', 'Id_1': 'Id_1', 'Num': 'Num', 'Nom': 'Nom', 'Cloture': 'Cloture', });
lyr_batiment_2.set('fieldAliases', {'Id': 'Id', 'Num': 'Num', });
lyr_Etat_des_lieux1_1.set('fieldImages', {'Id': 'Range', 'FID_1': 'TextEdit', 'Shape__': 'TextEdit', 'Id_1': 'TextEdit', 'Num': 'TextEdit', 'Nom': 'TextEdit', 'Cloture': 'TextEdit', });
lyr_batiment_2.set('fieldImages', {'Id': 'Range', 'Num': 'TextEdit', });
lyr_Etat_des_lieux1_1.set('fieldLabels', {'Id': 'no label', 'FID_1': 'inline label', 'Shape__': 'no label', 'Id_1': 'no label', 'Num': 'inline label', 'Nom': 'inline label', 'Cloture': 'no label', });
lyr_batiment_2.set('fieldLabels', {'Id': 'inline label', 'Num': 'inline label', });
lyr_batiment_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});