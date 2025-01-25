module.exports = {
  content: ["./index.html", "./credits/index.html"],
  safelist: [
    {
      pattern: /bg-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|stone|neutral|zinc|gray|slate)-(50|100|150|200|250|300|350|400|450|500|550|600|650|700|750|800|850|900|950)/,
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
      },
      colors: {
        slate: {
          150: '#E9EEF4',
          250: '#D6DEE8',
          350: '#AFBCCC',
          450: '#7C8BA1', 
          550: '#55647A',
          650: '#3D4B5F',
          750: '#283548',
          850: '#162032'
        },
        gray: {
          150: '#ECEDF0',
          250: '#DBDDE3',
          350: '#B7BBC7',
          450: '#838997',
          550: '#5E6471',
          650: '#41475A',
          750: '#2B3244',
          850: '#181E2F'
        },
        zinc: {
          150: '#E9E9EB',
          250: '#DBDBDF',
          350: '#BBBBC0',
          450: '#898992',
          550: '#62626D',
          650: '#48484E',
          750: '#333338',
          850: '#1F1F23'
        },
        neutral: {
          150: '#EDEDED',
          250: '#DCDCDC',
          350: '#BBBBBB',
          450: '#8B8B8B',
          550: '#626262',
          650: '#484848',
          750: '#333333',
          850: '#1F1F1F'
        },
        stone: {
          150: '#EBE8E7',
          250: '#DEDBD9',
          350: '#BFB9B4',
          450: '#8E8785',
          550: '#67615C',
          650: '#4E4A45',
          750: '#363330',
          850: '#221F1D'
        },
        red: {
          150: '#FED6D6',
          250: '#FDB8B8',
          350: '#FA8B8B',
          450: '#F35A5A',
          550: '#E63535',
          650: '#CD2222',
          750: '#A61C1C',
          850: '#8C1C1C'
        },
        orange: {
          150: '#FEDFBF',
          250: '#FEC88F',
          350: '#FDA058',
          450: '#FA842C',
          550: '#EC6811',
          650: '#DB4C0F',
          750: '#AE3A0F',
          850: '#8B3012'
        },
        amber: {
          150: '#FEE9A8',
          250: '#FDDC6B',
          350: '#FEC838',
          450: '#F8AE18',
          550: '#E78B08',
          650: '#C76807',
          750: '#A3490C',
          850: '#853A11'
        },
        yellow: {
          150: '#FEF2A6',
          250: '#FEE769',
          350: '#FED22E',
          450: '#F2C80C',
          550: '#DA9B06',
          650: '#B67505',
          750: '#93570A',
          850: '#7D4910'
        },
        lime: {
          150: '#E5FBB4',
          250: '#CBF780',
          350: '#B4E949',
          450: '#93D625',
          550: '#74B711',
          650: '#598F0E',
          750: '#456F10',
          850: '#3A5A13'
        },
        green: {
          150: '#D1FAD9',
          250: '#A1F3BB',
          350: '#69E696',
          450: '#36CE6F',
          550: '#1CB254',
          650: '#159141',
          750: '#157238',
          850: '#155C31'
        },
        emerald: {
          150: '#BCF6D8',
          250: '#8BF0C3',
          350: '#51E5A8',
          450: '#22C68D',
          550: '#0BA875',
          650: '#048760',
          750: '#056C4F',
          850: '#065642'
        },
        teal: {
          150: '#B3FCE7',
          250: '#7CF0DE',
          350: '#46DFC7',
          450: '#20C6B2',
          550: '#10A697',
          650: '#0E857B',
          750: '#106A64',
          850: '#125652'
        },
        cyan: {
          150: '#BAF7FD',
          250: '#86EDFA',
          350: '#44DBF3',
          450: '#14C5E1',
          550: '#07A3C3',
          650: '#0B82A1',
          750: '#116983',
          850: '#15566C'
        },
        sky: {
          150: '#CDE9FE',
          250: '#9CDBFE',
          350: '#5BC2FA',
          450: '#26B2F3',
          550: '#0894D8',
          650: '#0277B4',
          750: '#056193',
          850: '#09517A'
        },
        blue: {
          150: '#CDDFFE',
          250: '#AAD0FE',
          350: '#79B5FB',
          450: '#4D93F8',
          550: '#3073F1',
          650: '#2159DF',
          750: '#1C47C1',
          850: '#1E3D9C'
        },
        indigo: {
          150: '#D3DCFE',
          250: '#B6C3FD',
          350: '#939EFA',
          450: '#7279F4',
          550: '#5959EB',
          650: '#493FD8',
          750: '#3D34B6',
          850: '#342F92'
        },
        violet: {
          150: '#E2DEFE',
          250: '#D0C5FE',
          350: '#B6A0FC',
          450: '#9774F8',
          550: '#814AF2',
          650: '#7531E3',
          750: '#6425C8',
          850: '#541FA6'
        },
        purple: {
          150: '#EEDFFF',
          250: '#E0C4FE',
          350: '#CC9CFD',
          450: '#B46CFB',
          550: '#9B44F3',
          650: '#882BDC',
          750: '#751EBB',
          850: '#621F98'
        },
        fuchsia: {
          150: '#FADCFE',
          250: '#F2BDFD',
          350: '#EC92FB',
          450: '#E060F6',
          550: '#CE35E1',
          650: '#B122C1',
          750: '#941B9F',
          850: '#791C82'
        },
        pink: {
          150: '#FBDAEE',
          250: '#FABADE',
          350: '#F68DC5',
          450: '#EF5DA8',
          550: '#E43A88',
          650: '#CE206A',
          750: '#AE1955',
          850: '#901848'
        },
        rose: {
          150: '#FFD9DC',
          250: '#FEB8C1',
          350: '#FE849A',
          450: '#FA5A72',
          550: '#EA2E53',
          650: '#D01742',
          750: '#AF153A',
          850: '#911438'
        }
      }
    }
  },
  plugins: []
 }