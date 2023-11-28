import Address from "../models/address.js";

const getById = async (id) => {
  try {
    const address = await Address.findOne({ where: { id: id } });

    if (!address) throw new Error(`Address is not found`);
    return address;
  } catch (error) {
    throw new Error(`Error in getById service: ${error.message}`);
  }
};

const getAllAddresses = async (page, size) => {
  try {
    const offset = (page - 1) * size;
    const Addresses = await Address.findAll({ offset: offset, limit: size });
    
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
    const address = await Address.findOne({ where: { id: +AddressId } });

    if (!address) throw new Error(`Address is not found`);

    await Address.destroy({
      where: { id: +AddressId },
    });

    return AddressId;
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
  getById
};
