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
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:postcode': 'addr:postcode', 'addr:city': 'addr:city', 'shop': 'shop', 'service:bicycle:retail': 'service:bicycle:retail', 'service:bicycle:repair': 'service:bicycle:repair', 'phone': 'phone', 'brand': 'brand', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'level': 'level', 'name': 'name', 'capacity:persons': 'capacity:persons', 'building:walls': 'building:walls', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:levels': 'building:levels', 'amenity': 'amenity', 'access:roof': 'access:roof', 'type': 'type', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'addr:postcode': '', 'addr:city': '', 'shop': '', 'service:bicycle:retail': '', 'service:bicycle:repair': '', 'phone': '', 'brand': '', 'addr:street': '', 'addr:housenumber': '', 'level': '', 'name': '', 'capacity:persons': '', 'building:walls': '', 'building:structure': '', 'building:roof': '', 'building:levels': '', 'amenity': '', 'access:roof': '', 'type': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:postcode': 'no label', 'addr:city': 'no label', 'shop': 'no label', 'service:bicycle:retail': 'no label', 'service:bicycle:repair': 'no label', 'phone': 'no label', 'brand': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'level': 'no label', 'name': 'no label', 'capacity:persons': 'no label', 'building:walls': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:levels': 'no label', 'amenity': 'no label', 'access:roof': 'no label', 'type': 'no label', });
lyr_building_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});