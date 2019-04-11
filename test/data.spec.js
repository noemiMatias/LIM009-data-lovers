global.window = global;
require('../src/data');
require('./data.spec.js');
const input1 = [{
  'data': {
    '1960': '',
    '1961': '',
    '1962': '',
    '1963': '',
    '1964': '',
    '1965': '',
    '1966': '',
    '1967': '',
    '1968': '',
    '1969': '',
    '1970': '',
    '1971': '',
    '1972': '',
    '1973': '',
    '1974': '',
    '1975': '',
    '1976': '',
    '1977': '',
    '1978': '',
    '1979': '',
    '1980': '',
    '1981': '',
    '1982': '',
    '1983': '',
    '1984': '',
    '1985': '',
    '1986': '',
    '1987': '',
    '1988': '',
    '1989': '',
    '1990': '',
    '1991': '',
    '1992': '',
    '1993': '',
    '1994': '',
    '1995': '',
    '1996': '',
    '1997': '',
    '1998': '',
    '1999': '',
    '2000': '',
    '2001': '',
    '2002': 56.2318000793457,
    '2003': 52.6481018066406,
    '2004': 50.8222007751465,
    '2005': 51.5507011413574,
    '2006': 52.0872993469238,
    '2007': 53.2682991027832,
    '2008': 51.265998840332,
    '2009': 52.486499786377,
    '2010': 54.82080078125,
    '2011': 52.3019981384277,
    '2012': 51.7058982849121,
    '2013': 51.1726989746094,
    '2014': 48.8818016052246,
    '2015': 46.7711982727051,
    '2016': 45.850399017334,
    '2017': 47.2914009094238
  },
  'countryName': 'Perú',
  'countryCode': 'PER',
  'indicatorName': 'Fuerza laboral con educación básica (% del total)',
  'indicatorCode': 'SL.TLF.BASC.ZS'
}];
const ouput=
describe('worldbank', () => {
  
  it('debería ser un objeto', () => {
    expect(typeof worldbank).toBe('object'); 
  });

  describe('capturarIndicadores', () => {
  
    it('debería ser una funcion', () => {
      expect(typeof worldbank.capturarIndicadores).toBe('function'); 
    });
    it('debería retornar un nuevo array', () => {
      expect(worldbank.capturarIndicadores(input1)).toEqual(output1); 
    });

  });
  describe('capturarAnios', () => {
  
    it('debería ser una funcion', () => {
      expect(typeof worldbank.capturarAnios).toBe('function'); 

     });
  });
});