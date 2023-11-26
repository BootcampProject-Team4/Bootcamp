import Place from '../models/place.js';

const getAllPlaces = async () => {
  try {
    const places = await Place.findAll();
  
    return places;
  } catch (error) {
    throw new Error(`Error in getAllPlaces service: ${error.message}`);    
  }
};

const createPlace = async (PlaceData) => {
  try {
    const newPlace = await Place.create(PlaceData);
    newPlace.save();
    return newPlace;
  } catch (error) {
    throw new Error(`Error in createPlace service: ${error.message}`);
  }
};

const deletePlace = async (PlaceId) => {
  try {
    const deletedPlace = await Place.destroy({ where: { id: +PlaceId }, });
    
    return deletedPlace;
  } catch (error) {
    throw new Error(`Error in deletePlace service: ${error.message}`);
  }
};

const updatePlace = async (PlaceId, PlaceData) => {
  try {
    const [updatedRowsCount, updatedCategories] = await Place.update(PlaceData, { where: { id: +PlaceId }, returning: true });
    
    if (updatedRowsCount > 0) {
      return updatedCategories[0].get();
    }
    throw new Error(`Place with id ${PlaceId} not found`);
  } catch (error) {
    throw new Error(`Error in updatePlace service: ${error.message}`);
  }
};

export default{ getAllPlaces, createPlace, deletePlace, updatePlace };