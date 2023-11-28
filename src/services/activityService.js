import Activity from '../models/activity.js';


const getById = async (id) => {
  try {    
    const activity = await Activity.findOne({ where: { id:id } });

    if(!activity) throw new Error(`Activity is not found`);
    return activity;
  } catch (error) {
    throw new Error(`Error in getById service: ${error.message}`);
  }
};
// Function to get all activities
const getAllActivities = async (page, size) => {
  try {
    const offset = (page - 1) * size;
    const activities = await Activity.findAll({
      offset: offset,
      limit: size,
    });

    return activities;
  } catch (error) {
    throw new Error(`Error in getAllActivities service: ${error.message}`);
  }
};

// Function to create a new activity
const createActivity = async (ActivityData) => {
    try {
        
        const newActivity = await Activity.create(ActivityData);
        return newActivity;
    } catch (error) {
        throw new Error(`Error in createActivity service: ${error.message}`);
    }
};

// Function to delete all activities
const deleteActivity = async (activityId) => {
    try {
        const activity = await Activity.findOne({ where: { id: +activityId } });

        if (!activity) throw new Error(`Activity is not found`);

        await Activity.destroy({ where: {id : +activityId },});
        return activityId;
    } catch (error) {
        throw new Error(`Error in deleteActivity service: ${error.message}`);
    }
};

// Function to update all activities
const updateActivity = async (activityId, ActivityData) => {
  try {
    const [updatedRowsCount, updatedActivities] = await Activity.update(
      ActivityData,
      { where: { id: +activityId }, returning: true }
    );

    if (updatedRowsCount > 0) {
      return updatedActivities[0].get();
    }
    throw new Error(`Activity with id ${activityId} not found`);
  } catch (error) {
    throw new Error(`Error in updateActivity service: ${error.message}`);
  }
};

// Export the service functions
export default { getAllActivities, createActivity, deleteActivity, updateActivity,getById };
