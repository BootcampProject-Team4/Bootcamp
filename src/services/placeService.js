import Place from '../models/place.js';


const getById = async (id) => {
  try {
    const place = await Place.findOne({ where: { id: id } });

    if (!place) throw new Error(`Place is not found`);
    return place;
  } catch (error) {
    throw new Error(`Error in getById service: ${error.message}`);
  }
};

const getAllPlaces = async (page, size) => {
  try {
    const offset = (page - 1) * size;  
    const places = await Place.findAll({ offset: offset, limit: size });

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
    const place = await Place.findOne({ where: { id: +PlaceId } });

    if (!place) throw new Error(`Place is not found`);

    await Place.destroy({ where: { id: +PlaceId }, });
    
    return PlaceId;
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

export default{ getAllPlaces, createPlace, deletePlace, updatePlace, getById };