import Activity from '../models/activity.js';



// Function to get all activities
const getAll = async (userId) => {
    try {
        
        const activities = await Activity.findAll(userId);
        return activities;
    } catch (error) {
        throw new Error('Error while fetching activities');
    }
};

// Function to create a new activity
const create = async (newActivityData) => {
    try {
        
        const newActivity = await Activity.create(newActivityData);
        return newActivity;
    } catch (error) {
        throw new Error('Error while creating a new activity');
    }
};

// Function to delete all activities
const deleteAll = async () => {
    try {
        await Activity.destroy({
            where: {} 
        });
        return 'All activities deleted successfully';
    } catch (error) {
        throw new Error('Error while deleting all activities');
    }
};

// Function to update all activities
const updateAll = async (updatedData) => {
    try {
        const updatedActivities = await Activity.update(
            updatedData,
            { where: {} } 
        );
        return updatedActivities;
    } catch (error) {
        throw new Error('Error while updating all activities');
    }
};

// Export the service functions
export default { getAll, create, deleteAll, updateAll };
