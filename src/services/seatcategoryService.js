import Seatcategory from "../models/seatcategory.js";

const getAllSeatcategories = async () => {
  try {
    const seatcategories = await Seatcategory.findAll();

    return seatcategories;
  } catch (error) {
    throw new Error(`Error in getAllSeatcategories service: ${error.message}`);
  }
};

const createSeatcategory = async (SeatcategoryData) => {
  try {
    const newSeatcategory = await Seatcategory.create(SeatcategoryData);
    newSeatcategory.save();
    return newSeatcategory;
  } catch (error) {
    throw new Error(`Error in createSeatcategory service: ${error.message}`);
  }
};

const deleteSeatcategory = async (SeatcategoryId) => {
  try {
    await Seatcategory.destroy({ where: { id: +SeatcategoryId } });""
 
    return SeatcategoryId;
  } catch (error) {
    throw new Error(`Error in deleteSeatcategory service: ${error.message}`);
  }
};

const updateSeatcategory = async (SeatcategoryId, SeatcategoryData) => {
  try {
    const [updatedRowsCount, updatedCategories] = await Seatcategory.update(
      SeatcategoryData,
      { where: { id: +SeatcategoryId }, returning: true }
    );

    if (updatedRowsCount > 0) {
      return updatedCategories[0].get();
    }
    throw new Error(`Seatcategory with id ${SeatcategoryId} not found`);
  } catch (error) {
    throw new Error(`Error in updateSeatcategory service: ${error.message}`);
  }
};

export default { getAllSeatcategories, createSeatcategory, deleteSeatcategory, updateSeatcategory };
