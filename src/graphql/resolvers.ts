import Site from '../models/Site';
import axios from 'axios';

export default {
    Query: {
        sites: async (parent: any, args: any, context: any, info: any) => {
            try {
                // console.log(args.siteId);
                const sites = await Site.find({}); // all Sites
                // console.log(sites);
                return sites;
            } 
            catch(err) {
                console.log(err);
                throw err;
            }
        },
        site: async (parent: any, args: any, context: any, info: any) => {
            try {
                const requestedSite = await Site.findById(args.siteId);
                return requestedSite;
                
            } catch (err) {
                console.log(err);
                throw err;
            }

        },
        bizLocations: async () => {
            try {
                const response = await axios(`${process.env.EPCIS_COMPANY_URI}`, 
                    {
                        headers: {"Authorization": `${process.env.EPCIS_COMPANY_TOKEN}`}
                    });
                let bizLocs = await response.data;
                // console.log(bizLocs);
                return bizLocs;
            } catch(err) {
                throw err;
            }
        }
    },
    Mutation: {
        createSite: async (parent: any, args: any, context: any, info: any) => {
            try {
                // console.log(context);
                const site = new Site({
                    company: args.siteInput.company,
                    siteName: args.siteInput.siteName,
                    countryCode: args.siteInput.countryCode,
                    city: args.siteInput.city,
                    topic: args.siteInput.topic,
                    sensors: args.siteInput.sensors,
                });
                const result = await site.save();

                return result;
            } catch(err) {
                throw err;
            }
        },
        removeSite: async (parent: any, args: any, context: any, info: any) => {
            try {
                const siteToRemove = await Site.findById(args.siteId);
                await Site.deleteOne({_id: args.siteId});
                return siteToRemove;
                
            } catch (err) {
                throw err;
            }
        },
        updateSite: async (parent: any, args: any, context: any, info: any) => {
            try {
                const siteToUpdate = await Site.findByIdAndUpdate({ _id: args.siteId}, args.siteInput, {new: true});
                // console.log(siteToUpdate);
                return siteToUpdate;
                
            } catch (err) {
                throw err;
            }
        }
    }
};
