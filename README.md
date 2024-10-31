# Sentinel-2-Image-Clustering
![ alt text ](https://img.shields.io/badge/license-MIT-green?style=&logo=)
![ alt text ](https://img.shields.io/badge/-Jupyter-F37626?logo=Jupyter&logoColor=white)
![ alt text ](https://img.shields.io/badge/-NumPy-013243?logo=Numpy&logoColor=white)
![ alt text ](https://img.shields.io/badge/-Google--Earth--Engine-4285F4?logo=googleearthengine&logoColor=white)
![ alt text ](https://img.shields.io/badge/-scikit--learn-F7931E?logo=scikitlearn&logoColor=white)

Image clustering (unsupervised classification) on Sentinel-2 satellite images with k-means approach. The rasters were extracted via Google's Earth Engine. Sentinel-2 dataset is open-source and utilizes wide-swath, high-resolution, multi-spectral imaging. A script for extracting the data is attached to this repository.

With the use of model inertias and Davies-Bouldin indices the k-means algorithm detected five clusters (land cover types) in the training raster. The remaining arguments were left to default settings.

<p align='center'>
<img src='https://github.com/user-attachments/assets/67384411-b030-4b25-b04e-bb96601b7b52' height='180'/>
</p>

Once the model was trained, it was tested to predict the same learned clusters for unseen image. In this case the terrain should be similar. Using this clusterer in a foreign area will return inaccurate labels. A new image adjacent to the previous raster was used to predict the same classes on it. By comparing the original rasters with the clustering results we can notice quite high accuracy in regionalization. Especially in reservoirs and forests. We notice the predominance of agricultural and rural areas. The images have been clustered properly and the terrain types seem to match each other. This k-means model works well on remotely sensed data of this geographic region.

<p align='center'>
<img src='https://github.com/user-attachments/assets/38d1d86d-e528-435c-8e1a-a5cc6b6bb8b8' height='200'/>
<img src='https://github.com/user-attachments/assets/f48ff1c6-9555-4bed-8f9c-3c88fc2f4d62' height='170'/>
</p>
