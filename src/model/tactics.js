/**
 * Created by Richard on 14.07.2016.
 */
import mongoose from 'mongoose';

const tacticsSchema = new mongoose.Schema({
    name: String,
    info: String
})

export default mongoose.model('Tactic',tacticsSchema);