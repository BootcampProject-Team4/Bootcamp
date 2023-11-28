import Seat from "../models/seat.js";

const getAllSeats = async (page, size) => {
  try {
    const offset = (page - 1) * size;
    const seats = await Seat.findAll({ offset: offset, limit: size });

    return seats;
  } catch (error) {
    throw new Error(`Error in getAllSeats service: ${error.message}`);
  }
};

const createSeat = async (SeatData) => {
  try {
    const newSeat = await Seat.create(SeatData);
    newSeat.save();
    return newSeat;
  } catch (error) {
    throw new Error(`Error in createSeat service: ${error.message}`);
  }
};

const deleteSeat = async (SeatId) => {
  try {
    await Seat.destroy({ where: { id: +SeatId } });""
 
    return SeatId;
  } catch (error) {
    throw new Error(`Error in deleteSeat service: ${error.message}`);
  }
};

const updateSeat = async (SeatId, SeatData) => {
  try {
    const [updatedRowsCount, updatedCategories] = await Seat.update(
      SeatData,
      { where: { id: +SeatId }, returning: true }
    );

    if (updatedRowsCount > 0) {
      return updatedCategories[0].get();
    }
    throw new Error(`Seat with id ${SeatId} not found`);
  } catch (error) {
    throw new Error(`Error in updateSeat service: ${error.message}`);
  }
};

export default { getAllSeats, createSeat, deleteSeat, updateSeat };
