import * as yup from 'yup';

const ProfileSchema = yup.object({
    gender: yup.string().required({ fieldName:'gender', msg: 'this field is required' }),
    country:yup.string().required({  fieldName:'country',msg: 'this field is required' }),
    birthdate:yup.date(),
    intrests: yup.array(),
    bio: yup.string().max(300,{  fieldName:'bio',msg: 'bio should be less than 300 charchter' }),
    avatar: yup.string().url({  fieldName:'avatar',msg: 'enter a valid url' }),
    practiceLanguages: yup.array().required({ fieldName: 'practiceLanguages', msg: 'this field is required' }),
    spokenLanguages: yup.array().required({ fieldName: 'spokenLanguages', msg: 'this field is required' }),
});

export default ProfileSchema;