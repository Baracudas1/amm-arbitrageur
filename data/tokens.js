const tokens = [
  "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
  "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39",
  "0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a",
  "0x172370d5cd63279efa6d502dab29171933a610af",
  "0x85955046df4668e1dd369d2de9f3aeb98dd2a369",
  "0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3",
  "0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7",
  "0xd6df932a45c0f255f85145f286ea0b292b21c90b",
  "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
  "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
  "0x8A953CfE442c5E8855cc6c61b1293FA648BAE472",
  "0x22a31bD4cB694433B6de19e0aCC2899E553e9481",
  "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
  "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
  "0x229b1b6C23ff8953D663C4cBB519717e323a0a84",
  "0xE06Bd4F5aAc8D0aA337D13eC88dB6defC6eAEefE",
  "0xD1f9c58e33933a993A3891F8acFe05a68E1afC05",
  "0x228b5C21ac00155cf62c57bcc704c0dA8187950b",
  "0x4c4BF319237D98a30A929A96112EfFa8DA3510EB",
  "0x02649C1Ff4296038De4b9bA8F491b42b940A8252",
  "0xc1c93D475dc82Fe72DBC7074d55f5a734F8cEEAE",
  "0xCc2a9051E904916047c26C90f41c000D4f273456",
  "0x9ff62d1FC52A907B6DCbA8077c2DDCA6E6a9d3e1",
  "0x12a34A6759c871C4C1E8A0A42CFc97e4D7Aaf68d",
  "0x1599fE55Cda767b1F631ee7D414b41F5d6dE393d",
  "0xE6469Ba6D2fD6130788E0eA9C0a0515900563b59",
  "0x0bD49815EA8e2682220BCB41524c0dd10Ba71d41",
  "0x82362Ec182Db3Cf7829014Bc61E9BE8a2E82868a",
  "0x0B220b82F3eA3B7F6d9A1D8ab58930C064A2b5Bf",
  "0xf8F9efC0db77d8881500bb06FF5D6ABc3070E695",
  "0xE0339c80fFDE91F3e20494Df88d4206D86024cdF",
  "0x2088C47Fc0c78356c622F79dBa4CbE1cCfA84A91",
  "0x1C954E8fe737F99f68Fa1CCda3e51ebDB291948C",
  "0x43E4B063F96c33F0433863A927F5bad34bb4B03d",
  "0x42f37A1296b2981F7C3cAcEd84c5096b2Eb0C72C",
  "0xdF7837DE1F2Fa4631D716CF2502f8b230F1dcc32",
  "0x2B9E7ccDF0F4e5B24757c1E1a80e311E34Cb10c7",
  "0xDBf31dF14B66535aF65AaC99C32e9eA844e14501",
  "0x7583FEDDbceFA813dc18259940F76a02710A8905",
  "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7",
  "0xE5417Af564e4bFDA1c483642db72007871397896",
  "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
  "0xef938b6da8576a896f6E0321ef80996F4890f9c4",
  "0x4e78011Ce80ee02d2c3e649Fb657E45898257815",
  "0xFbdd194376de19a88118e84E279b977f165d01b8",
  "0x7FBc10850caE055B27039aF31bD258430e714c62",
  "0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4",
  "0xdb725f82818De83e99F1dAc22A9b5B51d3d04DD4",
  "0xC3Ec80343D2bae2F8E680FDADDe7C17E71E114ea",
  "0xBbbe128568222623D21299f019a978C8587B33dC",
  "0x779b299eA455D35A44FE9baC48648be22C08DEa2",
  "0x54cFe73f2c7d0c4b62Ab869B473F5512Dc0944D2",
  "0xC8E36f0a44fBecA89FdD5970439cBe62EB4b5d03",
  "0x111111517e4929D3dcbdfa7CCe55d30d4B6BC4d6",
  "0xc6480Da81151B2277761024599E8Db2Ad4C388C8",
  "0x9377Eeb7419486FD4D485671d50baa4BF77c2222",
  "0x23fE1Ee2f536427B7e8aC02FB037A7f867037Fe8",
  "0x361A5a4993493cE00f61C32d4EcCA5512b82CE90",
  "0xa3eD22EEE92a3872709823a6970069e12A4540Eb",
  "0x1631244689EC1fEcbDD22fb5916E920dFC9b8D30",
  "0x58c1BBb508e96CfEC1787Acf6Afe1C7008A5B064",
  "0xF391F574C63d9b8764B7a1F56D6383762E07B75B",
  "0x580A84C73811E1839F75d86d75d88cCa0c241fF4",
  "0xFA1171334CB3a0f0A91E8cA6765F10e9638D1cBF",
  "0x6cCBF3627b2C83AFEF05bf2F035E7f7B210Fe30D",
  "0xf50D05A1402d0adAfA880D36050736f9f6ee7dee",
  "0x08C15FA26E519A78a666D19CE5C646D55047e0a3",
  "0xad93E067e149f0A5ecd12D8EA83B05581dD6374C",
  "0x7dc0cb65EC6019330a6841e9c274f2EE57A6CA6C",
  "0x5d47bAbA0d66083C52009271faF3F50DCc01023C",
  "0xC5B57e9a1E7914FDA753A88f24E5703e617Ee50c",
  "0xBBCA42c60b5290F2c48871A596492F93fF0Ddc82",
  "0xC1543024DC71247888a7e139c644F44E75E96d38",
  "0xc3cFFDAf8F3fdF07da6D5e3A89B8723D5E385ff8",
  "0xAB5F7a0e20b0d056Aed4Aa4528C78da45BE7308b",
  "0x692C44990E4F408ba0917f5c78A83160c1557237",
  "0x9A06Db14D639796B25A6ceC6A1bf614fd98815EC",
  "0x91E7E32C710661C44ae44D10Aa86135d91C3Ed65",
  "0x7cef6ed1e07079e174601d39066AD0856cB47988",
  "0x66e16D50c07A01BB473eC794349d45aa1a0E5Dc2",
  "0x50D0799ba241E10A6E9bAcE2936129f117Cb32af",
  "0xF30355BA14B2d3b31597EC71a4542f57e902Cb80",
  "0x9EECD634c7a934F752aF0EB90DdA9Ecc262F199F",
  "0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683",
  "0x3A58a54C066FdC0f2D55FC9C89F0415C92eBf3C4",
  "0xf0f9D895aCa5c8678f706FB8216fa22957685A13",
  "0xd0258a3fD00f38aa8090dfee343f10A9D4d30D3F",
  "0xc6C855AD634dCDAd23e64DA71Ba85b8C51E5aD7c",
  "0x576Cf361711cd940CD9C397BB98C4C896cBd38De",
  "0xB35fcBCF1fD489fCe02Ee146599e893FDCdC60e6",
  "0xe82808eaA78339b06a691fd92E1Be79671cAd8D3",
  "0xab0b2ddB9C7e440fAc8E140A89c0dbCBf2d7Bbff",
  "0xcE899f26928a2B21c6a2Fddd393EF37c61dbA918",
  "0xAa7DbD1598251f856C12f63557A4C4397c253Cea",
  "0xc3FdbadC7c795EF1D6Ba111e06fF8F16A20Ea539",
  "0x695FC8B80F344411F34bDbCb4E621aA69AdA384b",
  "0xb33EaAd8d922B1083446DC23f610c2567fB5180f",
  "0xfe4546feFe124F30788c4Cc1BB9AA6907A7987F9",
  "0x91c89A94567980f0e9723b487b0beD586eE96aa7",
  "0xD86b5923F3AD7b585eD81B448170ae026c65ae9a",
  "0x0E50BEA95Fe001A370A4F1C220C49AEdCB982DeC",
  "0xa2CA40DBe72028D3Ac78B5250a8CB8c404e7Fb8C",
  "0xEe9801669C6138E84bD50dEB500827b776777d28",
  "0x1B815d120B3eF02039Ee11dC2d33DE7aA4a8C603",
  "0x381d168DE3991c7413d46e3459b48A5221E3dfE4",
  "0x300211Def2a644b036A9bdd3e58159bb2074d388",
  "0x554f074d9cCda8F483d1812d4874cBebD682644E",
  "0x032F85b8FbF8540a92B986d953e4C3A61C76d39E",
  "0x23E8B6A3f6891254988B84Da3738D2bfe5E703b9",
  "0x13748d548D95D78a3c83fe3F32604B4796CFfa23",
  "0x033d942A6b495C4071083f4CDe1f17e986FE856c",
  "0xd0e9c8f5Fae381459cf07Ec506C1d2896E8b5df6",
  "0x3f6b3595ecF70735D3f48D69b09C4E4506DB3F47",
  "0x855D4248672a1fCE482165e8DBE1207b94b1968a",
  "0x576Cf361711cd940CD9C397BB98C4C896cBd38De",
];

module.exports = { tokens };
