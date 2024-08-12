import mongoose from "mongoose"


// Connect to Database

export const connectDb = async () => {
    const dbName = 'Crashem';
    try {
        if (mongoose.connections && mongoose.connections[0].readyState) return

        const { connection } = await mongoose.connect(
            process.env.MONGODB_URI as string,
            {
                dbName
            }
        );
        console.log(`Connected to database ${connection.host}, ${dbName}`)
    } catch (error) {
        throw new Error("Error connecting to database");
    }
}


export const connectMasterDb = async () => {
    const dbName = 'CrashemMaster'
    try {
        if (mongoose.connections && mongoose.connections[0].readyState) return

        const { connection } = await mongoose.connect(
            process.env.MONGODB_URI as string,
            {
                dbName
            }
        );
        console.log(`Connected to database ${connection.host}, ${dbName}`)
    } catch (error) {
        throw new Error("Error connecting to database");
    }
}





