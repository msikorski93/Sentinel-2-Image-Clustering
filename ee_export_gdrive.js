/*
var roi Polygon
[20.940702340368155,52.439826976198205],
[21.037519356969717,52.439826976198205],
[21.037519356969717,52.49420815373594],
[20.940702340368155,52.49420815373594],
[20.940702340368155,52.439826976198205]

var roi2 Polygon
[20.906627805532707,52.49819643242005],
[21.146953733267082,52.49819643242005],
[21.146953733267082,52.579217629418665],
[20.906627805532707,52.579217629418665],
[20.906627805532707,52.49819643242005]
*/

// 1. Load Sentinel 2A image
var image = ee.ImageCollection('COPERNICUS/S2_SR')
.filterDate('2020-01-01', '2020-12-30')
.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
.filterBounds(roi)
.median();
print(image);

// 2. Set visualization parameter for sentinel 2A image 
var visParamsTrue = {bands: ['B4', 'B3', 'B2'], min: 0, max: 2500, gamma: 1.1};
Map.addLayer(image, visParamsTrue, 'Sentinel 2A');
Map.addLayer(image.clip(roi), visParamsTrue, 'StudyArea');
Map.centerObject(roi, 10);

// 3. Select bands (e.g., B4, B3, B2 for true color)
var selectedBands = image.select(['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B8A', 'B9', 'B11', 'B12']);
print(selectedBands);

// 4. Export TIF image to Google Drive
Export.image.toDrive({
  image: selectedBands.toFloat(),
  description: 'Sentinel_Narew',
  scale: 10,
  region: roi,
  fileFormat: 'GeoTIFF',
  crs: 'EPSG:4326',
  maxPixels: 1e13,
  //folder: 'new_folder'
});

// 5. Sample the image to create a feature collection for CSV export
var sample = selectedBands.sample({
  region: roi,
  scale: 10,
  numPixels: 10e13
});

// 6. Export CSV data to Google Drive
Export.table.toDrive({
  collection: sample,
  fileFormat: 'CSV',
  description: 'Samples_Sentinel',
  //folder: 'new_folder'
});