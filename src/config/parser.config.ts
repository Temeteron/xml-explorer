import fxp from 'fast-xml-parser';

// ΧΜΛ to JSON parser
const Parser = new fxp.XMLParser({ ignoreAttributes: false });

export default Parser;
