import Address from "../models/address.js";

const getAllAddresses = async () => {
  try {
    const Addresses = await Address.findAll();

    return Addresses;
  } catch (error) {
    throw new Error(`Error in getAllAddress service: ${error.message}`);
  }
};

const createAddress = async (AddressData) => {
  try {
    const newAddress = await Address.create(AddressData);
    newAddress.save();
    return newAddress;
  } catch (error) {
    throw new Error(`Error in createAddress service: ${error.message}`);
  }
};

const deleteAddress = async (AddressId) => {
  try {
    const deletedAddress = await Address.destroy({
      where: { id: +AddressId },
    });

    return deletedAddress;
  } catch (error) {
    throw new Error(`Error in deleteAddress service: ${error.message}`);
  }
};

const updateAddress = async (AddressId, AddressData) => {
  try {
    const [updatedRowsCount, updatedAddresses] = await Address.update(
      AddressData,
      { where: { id: +AddressId }, returning: true }
    );

    if (updatedRowsCount > 0) {
      return updatedAddresses[0].get();
    }
    throw new Error(`Address with id ${AddressId} not found`);
  } catch (error) {
    throw new Error(`Error in updateAddress service: ${error.message}`);
  }
};

export default {
  getAllAddresses,
  createAddress,
  deleteAddress,
  updateAddress,
};
