import Seatcategory from "../models/seatcategory.js";



const getById = async (id) => {
  try {
    const seatCategory = await Seatcategory.findOne({ where: { id: id } });

    if (!seatCategory) throw new Error(`Seat Category is not found`);
    return seatCategory;
  } catch (error) {
    throw new Error(`Error in getById service: ${error.message}`);
  }
};

const getAllSeatcategories = async (page, size) => {
  try {
    const offset = (page - 1) * size;
    const seatcategories = await Seatcategory.findAll({
      offset: offset,
      limit: size,
    });

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
    const seatCategory = await Seatcategory.findOne({ where: { id: +SeatcategoryId } });

    if (!seatCategory) throw new Error(`Seat Category is not found`);

    await Seatcategory.destroy({ where: { id: +SeatcategoryId } });
 
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

export default { getAllSeatcategories, createSeatcategory, deleteSeatcategory, updateSeatcategory, getById };
