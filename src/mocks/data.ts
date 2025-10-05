import type { BillResponse } from "../api/bill.types";

export const billMocks: BillResponse = {
  head: {
    counts: {
      billCount: 345,
      resultCount: 345,
    },
  },
  results: [
    {
      bill: {
        act: null,
        amendmentLists: [],
        billNo: "132",
        billType: "Public",
        billTypeURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-type/public",
        billYear: "2013",
        debates: [
          {
            chamber: {
              showAs: "Seanad Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/seanad",
            },
            date: "2013-12-18",
            debateSectionId: "dbsect_41",
            showAs:
              "Protection of the Public Interest from Tobacco Lobbying Bill 2013: Second Stage",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/seanad/2013-12-18/debate/main",
          },
          {
            chamber: {
              showAs: "Seanad Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/seanad",
            },
            date: "2013-12-17",
            debateSectionId: "dbsect_10",
            showAs:
              "Protection of the Public Interest from Tobacco Lobbying Bill 2013: First Stage",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/seanad/2013-12-17/debate/main",
          },
        ],
        events: [
          {
            event: {
              chamber: null,
              dates: [
                {
                  date: "2013-12-17",
                },
              ],
              eventURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-event/published",
              showAs: "Published",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/132/published",
            },
          },
          {
            event: {
              chamber: {
                chamberCode: "seanad",
                showAs: "Seanad Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/seanad",
              },
              dates: [
                {
                  date: "2013-12-18",
                },
              ],
              eventURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-event/bill-defeated",
              showAs: "Bill Defeated",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/132/bill-defeated",
            },
          },
        ],
        lastUpdated: "2018-05-11T09:53:50.060000+00:00",
        longTitleEn:
          "Bill entitled an Act to codify in Irish law the requirements of the United Nations framework convention on tobacco control which pertain to interactions between members of the tobacco industry and their agents and the Government, and where individuals breach these regulations to create offences and to provide for the investigation and prosecution of such offences by members of An Garda Síochána",
        longTitleGa:
          "Bille dá ngairtear Acht do chódú i ndlí na hÉireann na gceanglas de chuid Chreat-Choinbhinsiún na Náisiún Aontaithe ar rialú tobac a bhaineann le hidirghníomhaíochtaí idir páirtithe i dtionscal an tobac agus a ngníomhairí agus an Rialtas agus, i gcás go sáraíonn pearsana aonair na rialacháin sin, do chruthú cionta agus do dhéanamh socrú maidir le comhaltaí den Gharda Síochána d'imscrúdú agus d'ionchúiseamh na gcionta sin",
        method: "Introduced",
        methodURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-method/introduced",
        mostRecentStage: {
          event: {
            chamber: {
              chamberCode: "seanad",
              showAs: "Seanad Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/seanad",
            },
            dates: [
              {
                date: "2013-12-17",
              },
              {
                date: "2013-12-17",
              },
              {
                date: "2013-12-17",
              },
              {
                date: "2013-12-17",
              },
            ],
            house: {
              chamberCode: "seanad",
              chamberType: "house",
              houseCode: "seanad",
              houseNo: "24",
              showAs: "24th Seanad",
              uri: "https://data.oireachtas.ie/ie/oireachtas/house/seanad/24",
            },
            progressStage: 2,
            showAs: "Second Stage",
            stageCompleted: true,
            stageOutcome: "Defeated",
            stageURI:
              "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/132/stage/seanad/2",
          },
        },
        originHouse: {
          showAs: "Seanad Éireann",
          uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/seanad",
        },
        originHouseURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/house/seanad",
        relatedDocs: [],
        shortTitleEn:
          "Protection of the Public Interest from Tobacco Lobbying Bill 2013",
        shortTitleGa:
          "An Bille um Leas an Phobail a Chosaint ar Stocaireacht Tobac, 2013",
        source: "Private Member",
        sourceURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-source/private-member",
        sponsors: [
          {
            sponsor: {
              as: {
                showAs: null,
                uri: null,
              },
              by: {
                showAs: "Jillian van Turnhout",
                uri: "https://data.oireachtas.ie/ie/oireachtas/member/id/Jillian-van-Turnhout.S.2011-05-25",
              },
              isPrimary: false,
            },
          },
          {
            sponsor: {
              as: {
                showAs: null,
                uri: null,
              },
              by: {
                showAs: "Sean D. Barrett",
                uri: "https://data.oireachtas.ie/ie/oireachtas/member/id/Sean-D-Barrett.S.2011-05-25",
              },
              isPrimary: true,
            },
          },
          {
            sponsor: {
              as: {
                showAs: null,
                uri: null,
              },
              by: {
                showAs: "John Crown",
                uri: "https://data.oireachtas.ie/ie/oireachtas/member/id/John-Crown.S.2011-05-25",
              },
              isPrimary: false,
            },
          },
        ],
        stages: [
          {
            event: {
              chamber: {
                chamberCode: "seanad",
                showAs: "Seanad Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/seanad",
              },
              dates: [
                {
                  date: "2013-12-17",
                },
              ],
              house: {
                chamberCode: "seanad",
                chamberType: "house",
                houseCode: "seanad",
                houseNo: "24",
                showAs: "24th Seanad",
                uri: "https://data.oireachtas.ie/ie/oireachtas/house/seanad/24",
              },
              progressStage: 1,
              showAs: "First Stage",
              stageCompleted: true,
              stageOutcome: null,
              stageURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/1",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/132/stage/seanad/1",
            },
          },
          {
            event: {
              chamber: {
                chamberCode: "seanad",
                showAs: "Seanad Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/seanad",
              },
              dates: [
                {
                  date: "2013-12-17",
                },
                {
                  date: "2013-12-17",
                },
                {
                  date: "2013-12-17",
                },
                {
                  date: "2013-12-17",
                },
              ],
              house: {
                chamberCode: "seanad",
                chamberType: "house",
                houseCode: "seanad",
                houseNo: "24",
                showAs: "24th Seanad",
                uri: "https://data.oireachtas.ie/ie/oireachtas/house/seanad/24",
              },
              progressStage: 2,
              showAs: "Second Stage",
              stageCompleted: true,
              stageOutcome: "Defeated",
              stageURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/132/stage/seanad/2",
            },
          },
        ],
        status: "Defeated",
        statusURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-status/defeated",
        uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/132",
        versions: [
          {
            version: {
              date: "2013-12-17",
              docType: "bill",
              formats: {
                pdf: {
                  uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/132/eng/initiated/b13213s.pdf",
                },
                xml: null,
              },
              lang: "eng",
              showAs: "As Initiated",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/132/eng/initiated",
            },
          },
        ],
      },
      billSort: {
        actNoSort: null,
        actShortTitleEnSort: null,
        actShortTitleGaSort: null,
        actYearSort: null,
        billNoSort: 132,
        billShortTitleEnSort:
          "protection-of-the-public-interest-from-tobacco-lobbying-bill-2013",
        billShortTitleGaSort:
          "an-bille-um-leas-an-phobail-a-chosaint-ar-stocaireacht-tobac-2013",
        billYearSort: 2013,
      },
      contextDate: "2013-12-17",
    },
    {
      bill: {
        act: null,
        amendmentLists: [],
        billNo: "129",
        billType: "Public",
        billTypeURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-type/public",
        billYear: "2021",
        debates: [
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2022-06-01",
            debateSectionId: "dbsect_23",
            showAs:
              "Property Services (Land Price Register) Bill 2021: Second Stage (Resumed) [Private Members]",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2022-06-01/debate/main",
          },
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2022-05-26",
            debateSectionId: "dbsect_42",
            showAs:
              "Property Services (Land Price Register) Bill 2021: Second Stage [Private Members]",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2022-05-26/debate/main",
          },
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2021-10-19",
            debateSectionId: "dbsect_7",
            showAs:
              "Property Services (Land Price Register) Bill 2021: First Stage",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2021-10-19/debate/main",
          },
        ],
        events: [
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2021-09-22",
                },
                {
                  date: "2021-09-22",
                },
                {
                  date: "2021-10-19",
                },
                {
                  date: "2022-06-01",
                },
              ],
              eventURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-event/approved-for-initiation",
              showAs: "Approved for Initiation",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2021/129/approved-for-initiation",
            },
          },
        ],
        lastUpdated: "2024-09-11T14:11:00.470000+00:00",
        longTitleEn:
          "Bill entitled an Act to amend and extend the Property Services (Regulation) Act 2011 to provide for transparency regarding transactions involving property and for those purposes to expand the register that records residential property sales prices, to establish a land and other non-residential property transaction database and to provide for related matters.",
        longTitleGa:
          "Bille dá ngairtear Acht do leasú agus do leathnú an Achta um Sheirbhísí Maoine (Rialáil), 2011 chun socrú a dhéanamh i dtaobh trédhearcacht maidir le hidirbhearta lena ngabhann maoin agus, chun na gcríoch sin, chun an clár a mhéadú ina dtaifeadtear praghasanna díolachán maoine cónaithe, chun bunachar sonraí um idirbhearta talún agus maoine eile neamhchónaithe a bhunú agus do dhéanamh socrú i dtaobh nithe gaolmhara.",
        method: "Introduced",
        methodURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-method/introduced",
        mostRecentStage: {
          event: {
            chamber: {
              chamberCode: "dail",
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            dates: [
              {
                date: "2021-10-19",
              },
            ],
            house: {
              chamberCode: "dail",
              chamberType: "house",
              houseCode: "dail",
              houseNo: "33",
              showAs: "33rd Dáil",
              uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/33",
            },
            progressStage: 2,
            showAs: "Second Stage",
            stageCompleted: true,
            stageOutcome: null,
            stageURI:
              "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2021/129/stage/dail/2",
          },
        },
        originHouse: {
          showAs: "Dáil Éireann",
          uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
        },
        originHouseURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
        relatedDocs: [
          {
            relatedDoc: {
              date: "2021-10-19",
              docType: "memo",
              formats: {
                pdf: {
                  uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2021/129/eng/memo/b12921d-memo.pdf",
                },
                xml: null,
              },
              lang: "eng",
              showAs: "Explanatory Memorandum",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2021/129/eng/memo",
            },
          },
        ],
        shortTitleEn: "Property Services (Land Price Register) Bill 2021",
        shortTitleGa:
          "An Bille um Sheirbhísí Maoine (Clár um Praghsanna Talún), 2021",
        source: "Private Member",
        sourceURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-source/private-member",
        sponsors: [
          {
            sponsor: {
              as: {
                showAs: null,
                uri: null,
              },
              by: {
                showAs: "Cian O'Callaghan",
                uri: "https://data.oireachtas.ie/ie/oireachtas/member/id/Cian-O'Callaghan.D.2020-02-08",
              },
              isPrimary: true,
            },
          },
        ],
        stages: [
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2021-09-22",
                },
                {
                  date: "2021-09-22",
                },
                {
                  date: "2021-10-19",
                },
                {
                  date: "2021-10-19",
                },
              ],
              house: {
                chamberCode: "dail",
                chamberType: "house",
                houseCode: "dail",
                houseNo: "33",
                showAs: "33rd Dáil",
                uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/33",
              },
              progressStage: 1,
              showAs: "First Stage",
              stageCompleted: true,
              stageOutcome: null,
              stageURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/1",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2021/129/stage/dail/1",
            },
          },
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2021-10-19",
                },
              ],
              house: {
                chamberCode: "dail",
                chamberType: "house",
                houseCode: "dail",
                houseNo: "33",
                showAs: "33rd Dáil",
                uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/33",
              },
              progressStage: 2,
              showAs: "Second Stage",
              stageCompleted: true,
              stageOutcome: null,
              stageURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2021/129/stage/dail/2",
            },
          },
        ],
        status: "Defeated",
        statusURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-status/defeated",
        uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2021/129",
        versions: [
          {
            version: {
              date: "2021-10-19",
              docType: "bill",
              formats: {
                pdf: {
                  uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2021/129/eng/initiated/b12921d.pdf",
                },
                xml: null,
              },
              lang: "eng",
              showAs: "As Initiated",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2021/129/eng/initiated",
            },
          },
        ],
      },
      billSort: {
        actNoSort: null,
        actShortTitleEnSort: null,
        actShortTitleGaSort: null,
        actYearSort: null,
        billNoSort: 129,
        billShortTitleEnSort: "property-services-land-price-register-bill-2021",
        billShortTitleGaSort:
          "an-bille-um-sheirbhisi-maoine-clar-um-praghsanna-talun-2021",
        billYearSort: 2021,
      },
      contextDate: "2021-10-19",
    },
    {
      bill: {
        act: null,
        amendmentLists: [],
        billNo: "126",
        billType: "Public",
        billTypeURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-type/public",
        billYear: "2013",
        debates: [
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2015-03-10",
            debateSectionId: "dbsect_21",
            showAs:
              "Thirty-fourth Amendment to the Constitution (Neutrality) Bill 2013: Second Stage (Resumed) [Private Members]",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2015-03-10/debate/main",
          },
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2015-03-06",
            debateSectionId: "dbsect_3",
            showAs:
              "Thirty-fourth Amendment to the Constitution (Neutrality) Bill 2013: Second Stage [Private Members]",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2015-03-06/debate/main",
          },
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2013-12-10",
            debateSectionId: "dbsect_19",
            showAs:
              "Thirty-Fourth Amendment to the Constitution (Neutrality) Bill 2013: First Stage",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2013-12-10/debate/main",
          },
        ],
        events: [
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2015-03-10",
                },
              ],
              eventURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-event/bill-defeated",
              showAs: "Bill Defeated",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/126/bill-defeated",
            },
          },
          {
            event: {
              chamber: null,
              dates: [
                {
                  date: "2013-12-10",
                },
              ],
              eventURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-event/published",
              showAs: "Published",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/126/published",
            },
          },
        ],
        lastUpdated: "2018-05-11T09:21:57.700000+00:00",
        longTitleEn: "Bill entitled an Act to amend the Constitution",
        longTitleGa: "Bille dá ngairtear Acht chun an Bunreacht a leasú",
        method: "Introduced",
        methodURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-method/introduced",
        mostRecentStage: {
          event: {
            chamber: {
              chamberCode: "dail",
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            dates: [
              {
                date: "2012-12-10",
              },
              {
                date: "2012-12-10",
              },
              {
                date: "2012-12-10",
              },
              {
                date: "2012-12-10",
              },
              {
                date: "2012-12-10",
              },
            ],
            house: {
              chamberCode: "dail",
              chamberType: "house",
              houseCode: "dail",
              houseNo: "31",
              showAs: "31st Dáil",
              uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/31",
            },
            progressStage: 2,
            showAs: "Second Stage",
            stageCompleted: true,
            stageOutcome: "Defeated",
            stageURI:
              "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/126/stage/dail/2",
          },
        },
        originHouse: {
          showAs: "Dáil Éireann",
          uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
        },
        originHouseURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
        relatedDocs: [],
        shortTitleEn:
          "Thirty-fourth Amendment of the Constitution (Neutrality) Bill 2013",
        shortTitleGa:
          "An Bille um an gCeathrú Leasú is Tríocha ar an mBunreacht (Neodracht), 2013",
        source: "Private Member",
        sourceURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-source/private-member",
        sponsors: [
          {
            sponsor: {
              as: {
                showAs: null,
                uri: null,
              },
              by: {
                showAs: "Seán Crowe",
                uri: "https://data.oireachtas.ie/ie/oireachtas/member/id/Seán-Crowe.D.2002-06-06",
              },
              isPrimary: true,
            },
          },
        ],
        stages: [
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2013-12-10",
                },
              ],
              house: {
                chamberCode: "dail",
                chamberType: "house",
                houseCode: "dail",
                houseNo: "31",
                showAs: "31st Dáil",
                uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/31",
              },
              progressStage: 1,
              showAs: "First Stage",
              stageCompleted: true,
              stageOutcome: null,
              stageURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/1",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/126/stage/dail/1",
            },
          },
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2012-12-10",
                },
                {
                  date: "2012-12-10",
                },
                {
                  date: "2012-12-10",
                },
                {
                  date: "2012-12-10",
                },
                {
                  date: "2012-12-10",
                },
              ],
              house: {
                chamberCode: "dail",
                chamberType: "house",
                houseCode: "dail",
                houseNo: "31",
                showAs: "31st Dáil",
                uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/31",
              },
              progressStage: 2,
              showAs: "Second Stage",
              stageCompleted: true,
              stageOutcome: "Defeated",
              stageURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/126/stage/dail/2",
            },
          },
        ],
        status: "Defeated",
        statusURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-status/defeated",
        uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/126",
        versions: [
          {
            version: {
              date: "2013-12-10",
              docType: "bill",
              formats: {
                pdf: {
                  uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/126/eng/initiated/b12613d.pdf",
                },
                xml: null,
              },
              lang: "eng",
              showAs: "As Initiated",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/126/eng/initiated",
            },
          },
        ],
      },
      billSort: {
        actNoSort: null,
        actShortTitleEnSort: null,
        actShortTitleGaSort: null,
        actYearSort: null,
        billNoSort: 126,
        billShortTitleEnSort:
          "thirty-fourth-amendment-of-the-constitution-neutrality-bill-2013",
        billShortTitleGaSort:
          "an-bille-um-an-gceathru-leasu-is-triocha-ar-an-mbunreacht-neodracht-2013",
        billYearSort: 2013,
      },
      contextDate: "2012-12-10",
    },
    {
      bill: {
        act: null,
        amendmentLists: [],
        billNo: "122",
        billType: "Public",
        billTypeURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-type/public",
        billYear: "2013",
        debates: [
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2016-07-07",
            debateSectionId: "dbsect_11",
            showAs:
              "Protection of Life in Pregnancy (Amendment) (Fatal Foetal Abnormalities) (No. 2) Bill 2013: Second Stage (Resumed) [Private Members]",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2016-07-07/debate/main",
          },
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2016-06-30",
            debateSectionId: "dbsect_51",
            showAs:
              "Protection of Life in Pregnancy (Amendment) (Fatal Foetal Abnormalities) (No. 2) Bill 2013: Second Stage [Private Members]",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2016-06-30/debate/main",
          },
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2013-11-28",
            debateSectionId: "dbsect_22",
            showAs:
              "Protection of Life in Pregnancy (Amendment) (Fatal Foetal Abnormalities) (No. 2) Bill 2013: First Stage",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2013-11-28/debate/main",
          },
        ],
        events: [
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2016-02-03",
                },
              ],
              eventURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-event/bill-lapsed",
              showAs: "Bill Lapsed",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/122/bill-lapsed",
            },
          },
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2016-06-01",
                },
              ],
              eventURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-event/bill-restored",
              showAs: "Bill Restored",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/122/bill-restored",
            },
          },
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2016-07-07",
                },
              ],
              eventURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-event/bill-defeated",
              showAs: "Bill Defeated",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/122/bill-defeated",
            },
          },
          {
            event: {
              chamber: null,
              dates: [
                {
                  date: "2013-11-28",
                },
              ],
              eventURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-event/published",
              showAs: "Published",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/122/published",
            },
          },
        ],
        lastUpdated: "2018-05-11T09:12:17.190000+00:00",
        longTitleEn:
          "Bill entitled an Act to permit medical treatment leading to termination of pregnancy in situations where the foetus has a fatal abnormality such that it is incompatible with life outside of the womb.",
        longTitleGa:
          "Bille dá ngairtear Acht do cheadú cóireáil liachta as a dtiocfaidh foirceannadh toirchis i gcúinsí ina bhfuil éalang mharfach ar an bhféatas a fhágann nach bhfuil sé ag teacht le beatha lasmuigh den bhroinn.",
        method: "Introduced",
        methodURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-method/introduced",
        mostRecentStage: {
          event: {
            chamber: {
              chamberCode: "dail",
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            dates: [
              {
                date: "2013-11-28",
              },
              {
                date: "2013-11-28",
              },
              {
                date: "2013-11-28",
              },
              {
                date: "2013-11-28",
              },
              {
                date: "2013-11-28",
              },
              {
                date: "2013-11-28",
              },
              {
                date: "2013-11-28",
              },
            ],
            house: {
              chamberCode: "dail",
              chamberType: "house",
              houseCode: "dail",
              houseNo: "31",
              showAs: "31st Dáil",
              uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/31",
            },
            progressStage: 2,
            showAs: "Second Stage",
            stageCompleted: true,
            stageOutcome: "Defeated",
            stageURI:
              "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/122/stage/dail/2",
          },
        },
        originHouse: {
          showAs: "Dáil Éireann",
          uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
        },
        originHouseURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
        relatedDocs: [],
        shortTitleEn:
          "Protection of Life in Pregnancy (Amendment) (Fatal Foetal Abnormalities)(No. 2) Bill 2013",
        shortTitleGa:
          "An Bille um Chosaint na Beatha le linn Toirchis (Leasú) (Éalanga Marfacha Féatais)(Uimh. 2) 2013",
        source: "Private Member",
        sourceURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-source/private-member",
        sponsors: [
          {
            sponsor: {
              as: {
                showAs: null,
                uri: null,
              },
              by: {
                showAs: "Mick Wallace",
                uri: "https://data.oireachtas.ie/ie/oireachtas/member/id/Mick-Wallace.D.2011-03-09",
              },
              isPrimary: true,
            },
          },
        ],
        stages: [
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2013-11-28",
                },
              ],
              house: {
                chamberCode: "dail",
                chamberType: "house",
                houseCode: "dail",
                houseNo: "31",
                showAs: "31st Dáil",
                uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/31",
              },
              progressStage: 1,
              showAs: "First Stage",
              stageCompleted: true,
              stageOutcome: null,
              stageURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/1",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/122/stage/dail/1",
            },
          },
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2013-11-28",
                },
                {
                  date: "2013-11-28",
                },
                {
                  date: "2013-11-28",
                },
                {
                  date: "2013-11-28",
                },
                {
                  date: "2013-11-28",
                },
                {
                  date: "2013-11-28",
                },
                {
                  date: "2013-11-28",
                },
              ],
              house: {
                chamberCode: "dail",
                chamberType: "house",
                houseCode: "dail",
                houseNo: "31",
                showAs: "31st Dáil",
                uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/31",
              },
              progressStage: 2,
              showAs: "Second Stage",
              stageCompleted: true,
              stageOutcome: "Defeated",
              stageURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/122/stage/dail/2",
            },
          },
        ],
        status: "Defeated",
        statusURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-status/defeated",
        uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/122",
        versions: [
          {
            version: {
              date: "2013-11-28",
              docType: "bill",
              formats: {
                pdf: {
                  uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/122/eng/initiated/b12213d.pdf",
                },
                xml: null,
              },
              lang: "eng",
              showAs: "As Initiated",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2013/122/eng/initiated",
            },
          },
        ],
      },
      billSort: {
        actNoSort: null,
        actShortTitleEnSort: null,
        actShortTitleGaSort: null,
        actYearSort: null,
        billNoSort: 122,
        billShortTitleEnSort:
          "protection-of-life-in-pregnancy-amendment-fatal-foetal-abnormalities-no-2-bill-2013",
        billShortTitleGaSort:
          "an-bille-um-chosaint-na-beatha-le-linn-toirchis-leasu-ealanga-marfacha-featais-uimh-2-2013",
        billYearSort: 2013,
      },
      contextDate: "2013-11-28",
    },
    {
      bill: {
        act: null,
        amendmentLists: [],
        billNo: "121",
        billType: "Public",
        billTypeURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-type/public",
        billYear: "2018",
        debates: [
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2019-04-11",
            debateSectionId: "dbsect_63",
            showAs:
              "Thirty-Eighth Amendment of the Constitution (Neutrality) Bill 2018: Second Stage (Resumed) [Private Members]",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2019-04-11/debate/main",
          },
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2019-04-09",
            debateSectionId: "dbsect_33",
            showAs:
              "Thirty-Eighth Amendment of the Constitution (Neutrality) Bill 2018: Second Stage [Private Members]",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2019-04-09/debate/main",
          },
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2018-11-13",
            debateSectionId: "dbsect_6",
            showAs:
              "An Bille um an Ochtú Leasú is Tríocha ar an mBunreacht (Neodracht), 2018: An Chéad Chéim",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2018-11-13/debate/main",
          },
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2018-11-13",
            debateSectionId: "dbsect_7",
            showAs:
              "Thirty-Eighth Amendment of the Constitution (Neutrality) Bill 2018: First Stage",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2018-11-13/debate/main",
          },
        ],
        events: [
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2018-11-13",
                },
                {
                  date: "2019-04-11",
                },
              ],
              eventURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-event/published",
              showAs: "Published",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2018/121/published",
            },
          },
        ],
        lastUpdated: "2019-04-12T11:54:02.720000+00:00",
        longTitleEn: "Bill entitled an Act to amend the Constitution.",
        longTitleGa: "Bille dá ngairtear Acht chun an Bunreacht a leasú.",
        method: "Introduced",
        methodURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-method/introduced",
        mostRecentStage: {
          event: {
            chamber: {
              chamberCode: "dail",
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            dates: [
              {
                date: "2018-11-13",
              },
              {
                date: "2018-11-13",
              },
              {
                date: "2018-11-13",
              },
            ],
            house: {
              chamberCode: "dail",
              chamberType: "house",
              houseCode: "dail",
              houseNo: "32",
              showAs: "32nd Dáil",
              uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/32",
            },
            progressStage: 2,
            showAs: "Second Stage",
            stageCompleted: true,
            stageOutcome: "Defeated",
            stageURI:
              "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2018/121/stage/dail/2",
          },
        },
        originHouse: {
          showAs: "Dáil Éireann",
          uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
        },
        originHouseURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
        relatedDocs: [],
        shortTitleEn:
          "Thirty-Eighth Amendment of the Constitution (Neutrality) Bill 2018",
        shortTitleGa:
          "An Bille um an Ochtú Leasú is Tríocha ar an mBunreacht (Neodracht), 2018",
        source: "Private Member",
        sourceURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-source/private-member",
        sponsors: [
          {
            sponsor: {
              as: {
                showAs: null,
                uri: null,
              },
              by: {
                showAs: "Aengus Ó Snodaigh",
                uri: "https://data.oireachtas.ie/ie/oireachtas/member/id/Aengus-Ó-Snodaigh.D.2002-06-06",
              },
              isPrimary: true,
            },
          },
          {
            sponsor: {
              as: {
                showAs: null,
                uri: null,
              },
              by: {
                showAs: "Seán Crowe",
                uri: "https://data.oireachtas.ie/ie/oireachtas/member/id/Seán-Crowe.D.2002-06-06",
              },
              isPrimary: false,
            },
          },
        ],
        stages: [
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2018-11-13",
                },
                {
                  date: "2018-11-13",
                },
              ],
              house: {
                chamberCode: "dail",
                chamberType: "house",
                houseCode: "dail",
                houseNo: "32",
                showAs: "32nd Dáil",
                uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/32",
              },
              progressStage: 1,
              showAs: "First Stage",
              stageCompleted: true,
              stageOutcome: null,
              stageURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/1",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2018/121/stage/dail/1",
            },
          },
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2018-11-13",
                },
                {
                  date: "2018-11-13",
                },
                {
                  date: "2018-11-13",
                },
              ],
              house: {
                chamberCode: "dail",
                chamberType: "house",
                houseCode: "dail",
                houseNo: "32",
                showAs: "32nd Dáil",
                uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/32",
              },
              progressStage: 2,
              showAs: "Second Stage",
              stageCompleted: true,
              stageOutcome: "Defeated",
              stageURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2018/121/stage/dail/2",
            },
          },
        ],
        status: "Defeated",
        statusURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-status/defeated",
        uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2018/121",
        versions: [
          {
            version: {
              date: "2018-11-13",
              docType: "bill",
              formats: {
                pdf: {
                  uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2018/121/mul/initiated/b12118d.pdf",
                },
                xml: null,
              },
              lang: "mul",
              showAs: "As Initiated",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2018/121/mul/initiated",
            },
          },
        ],
      },
      billSort: {
        actNoSort: null,
        actShortTitleEnSort: null,
        actShortTitleGaSort: null,
        actYearSort: null,
        billNoSort: 121,
        billShortTitleEnSort:
          "thirty-eighth-amendment-of-the-constitution-neutrality-bill-2018",
        billShortTitleGaSort:
          "an-bille-um-an-ochtu-leasu-is-triocha-ar-an-mbunreacht-neodracht-2018",
        billYearSort: 2018,
      },
      contextDate: "2018-11-13",
    },
    {
      bill: {
        act: null,
        amendmentLists: [],
        billNo: "119",
        billType: "Public",
        billTypeURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-type/public",
        billYear: "2018",
        debates: [
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2018-11-15",
            debateSectionId: "dbsect_18",
            showAs:
              "Housing Emergency Measures in the Public Interest Bill 2018: Second Stage (Resumed) [Private Members]",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2018-11-15/debate/main",
          },
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2018-11-13",
            debateSectionId: "dbsect_40",
            showAs:
              "Housing Emergency Measures in the Public Interest Bill 2018: Second Stage [Private Members]",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2018-11-13/debate/main",
          },
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2018-11-08",
            debateSectionId: "dbsect_21",
            showAs:
              "Housing Emergency Measures in the Public Interest Bill 2018: First Stage",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2018-11-08/debate/main",
          },
        ],
        events: [
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2018-11-08",
                },
                {
                  date: "2018-11-15",
                },
              ],
              eventURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-event/published",
              showAs: "Published",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2018/119/published",
            },
          },
        ],
        lastUpdated: "2018-11-16T12:42:16.840000+00:00",
        longTitleEn:
          "Bill entitled an Act to, in the public interest, serve the common good in the matter of housing.",
        longTitleGa:
          "Bille dá ngairtear Acht d'fhónamh, ar mhaithe le leas an phobail, don leas coiteann i gcúrsaí tithíochta.",
        method: "Introduced",
        methodURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-method/introduced",
        mostRecentStage: {
          event: {
            chamber: {
              chamberCode: "dail",
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            dates: [
              {
                date: "2018-11-08",
              },
              {
                date: "2018-11-08",
              },
              {
                date: "2018-11-08",
              },
            ],
            house: {
              chamberCode: "dail",
              chamberType: "house",
              houseCode: "dail",
              houseNo: "32",
              showAs: "32nd Dáil",
              uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/32",
            },
            progressStage: 2,
            showAs: "Second Stage",
            stageCompleted: true,
            stageOutcome: "Defeated",
            stageURI:
              "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2018/119/stage/dail/2",
          },
        },
        originHouse: {
          showAs: "Dáil Éireann",
          uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
        },
        originHouseURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
        relatedDocs: [],
        shortTitleEn:
          "Housing Emergency Measures in the Public Interest Bill 2018",
        shortTitleGa:
          "An Bille um Bearta Tithíochta Éigeandála ar Mhaithe le Leas an Phobail, 2018",
        source: "Private Member",
        sourceURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-source/private-member",
        sponsors: [
          {
            sponsor: {
              as: {
                showAs: null,
                uri: null,
              },
              by: {
                showAs: "Seamus Healy",
                uri: "https://data.oireachtas.ie/ie/oireachtas/member/id/Seamus-Healy.D.2000-06-22",
              },
              isPrimary: true,
            },
          },
        ],
        stages: [
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2018-11-08",
                },
                {
                  date: "2018-11-08",
                },
              ],
              house: {
                chamberCode: "dail",
                chamberType: "house",
                houseCode: "dail",
                houseNo: "32",
                showAs: "32nd Dáil",
                uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/32",
              },
              progressStage: 1,
              showAs: "First Stage",
              stageCompleted: true,
              stageOutcome: null,
              stageURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/1",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2018/119/stage/dail/1",
            },
          },
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2018-11-08",
                },
                {
                  date: "2018-11-08",
                },
                {
                  date: "2018-11-08",
                },
              ],
              house: {
                chamberCode: "dail",
                chamberType: "house",
                houseCode: "dail",
                houseNo: "32",
                showAs: "32nd Dáil",
                uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/32",
              },
              progressStage: 2,
              showAs: "Second Stage",
              stageCompleted: true,
              stageOutcome: "Defeated",
              stageURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2018/119/stage/dail/2",
            },
          },
        ],
        status: "Defeated",
        statusURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-status/defeated",
        uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2018/119",
        versions: [
          {
            version: {
              date: "2018-11-08",
              docType: "bill",
              formats: {
                pdf: {
                  uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2018/119/eng/initiated/b11918d.pdf",
                },
                xml: null,
              },
              lang: "eng",
              showAs: "As Initiated",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2018/119/eng/initiated",
            },
          },
        ],
      },
      billSort: {
        actNoSort: null,
        actShortTitleEnSort: null,
        actShortTitleGaSort: null,
        actYearSort: null,
        billNoSort: 119,
        billShortTitleEnSort:
          "housing-emergency-measures-in-the-public-interest-bill-2018",
        billShortTitleGaSort:
          "an-bille-um-bearta-tithiochta-eigeandala-ar-mhaithe-le-leas-an-phobail-2018",
        billYearSort: 2018,
      },
      contextDate: "2018-11-08",
    },
    {
      bill: {
        act: null,
        amendmentLists: [],
        billNo: "118",
        billType: "Public",
        billTypeURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-type/public",
        billYear: "2014",
        debates: [
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2015-03-04",
            debateSectionId: "dbsect_31",
            showAs:
              "Family Home Mortgage Settlement Arrangement Bill 2014: Second Stage (Resumed) [Private Members]",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2015-03-04/debate/main",
          },
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2015-03-03",
            debateSectionId: "dbsect_30",
            showAs:
              "Family Home Mortgage Settlement Arrangement Bill 2014: Second Stage [Private Members]",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2015-03-03/debate/main",
          },
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2014-12-16",
            debateSectionId: "dbsect_23",
            showAs:
              "Family Home Mortgage Settlement Arrangement Bill 2014: First Stage",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2014-12-16/debate/main",
          },
        ],
        events: [
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2015-03-04",
                },
              ],
              eventURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-event/bill-defeated",
              showAs: "Bill Defeated",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2014/118/bill-defeated",
            },
          },
          {
            event: {
              chamber: null,
              dates: [
                {
                  date: "2014-12-16",
                },
              ],
              eventURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-event/published",
              showAs: "Published",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2014/118/published",
            },
          },
        ],
        lastUpdated: "2018-04-12T15:51:07.030000+00:00",
        longTitleEn:
          "Bill entitled an Act to provide for the enactment of a Family Home Mortgage Settlement Arrangement by the Insolvency Service of Ireland to assist mortgage holders in arrears",
        longTitleGa:
          "Bille dá ngairtear Acht do dhéanamh socrú maidir le Seirbhís Dócmhainneachta na hÉireann d'achtú Comhshocraíocht Socraíochta Morgáiste d'Áras an Teaghlaigh chun cabhrú le sealbhóirí morgáiste atá faoi riaráiste",
        method: "Introduced",
        methodURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-method/introduced",
        mostRecentStage: {
          event: {
            chamber: {
              chamberCode: "dail",
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            dates: [
              {
                date: "2014-12-16",
              },
              {
                date: "2014-12-16",
              },
              {
                date: "2014-12-16",
              },
              {
                date: "2014-12-16",
              },
              {
                date: "2014-12-16",
              },
            ],
            house: {
              chamberCode: "dail",
              chamberType: "house",
              houseCode: "dail",
              houseNo: "31",
              showAs: "31st Dáil",
              uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/31",
            },
            progressStage: 2,
            showAs: "Second Stage",
            stageCompleted: true,
            stageOutcome: "Defeated",
            stageURI:
              "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2014/118/stage/dail/2",
          },
        },
        originHouse: {
          showAs: "Dáil Éireann",
          uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
        },
        originHouseURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
        relatedDocs: [],
        shortTitleEn: "Family Home Mortgage Settlement Arrangement Bill 2014",
        shortTitleGa:
          "An Bille um Chomhshocraíocht Socraíochta Morgáiste d'Áras an Teaghlaigh, 2014",
        source: "Private Member",
        sourceURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-source/private-member",
        sponsors: [
          {
            sponsor: {
              as: {
                showAs: null,
                uri: null,
              },
              by: {
                showAs: "Michael McGrath",
                uri: "https://data.oireachtas.ie/ie/oireachtas/member/id/Michael-McGrath.D.2007-06-14",
              },
              isPrimary: true,
            },
          },
        ],
        stages: [
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2014-12-16",
                },
              ],
              house: {
                chamberCode: "dail",
                chamberType: "house",
                houseCode: "dail",
                houseNo: "31",
                showAs: "31st Dáil",
                uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/31",
              },
              progressStage: 1,
              showAs: "First Stage",
              stageCompleted: true,
              stageOutcome: null,
              stageURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/1",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2014/118/stage/dail/1",
            },
          },
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2014-12-16",
                },
                {
                  date: "2014-12-16",
                },
                {
                  date: "2014-12-16",
                },
                {
                  date: "2014-12-16",
                },
                {
                  date: "2014-12-16",
                },
              ],
              house: {
                chamberCode: "dail",
                chamberType: "house",
                houseCode: "dail",
                houseNo: "31",
                showAs: "31st Dáil",
                uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/31",
              },
              progressStage: 2,
              showAs: "Second Stage",
              stageCompleted: true,
              stageOutcome: "Defeated",
              stageURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2014/118/stage/dail/2",
            },
          },
        ],
        status: "Defeated",
        statusURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-status/defeated",
        uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2014/118",
        versions: [
          {
            version: {
              date: "2014-12-16",
              docType: "bill",
              formats: {
                pdf: {
                  uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2014/118/eng/initiated/b11814d.pdf",
                },
                xml: null,
              },
              lang: "eng",
              showAs: "As Initiated",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2014/118/eng/initiated",
            },
          },
        ],
      },
      billSort: {
        actNoSort: null,
        actShortTitleEnSort: null,
        actShortTitleGaSort: null,
        actYearSort: null,
        billNoSort: 118,
        billShortTitleEnSort:
          "family-home-mortgage-settlement-arrangement-bill-2014",
        billShortTitleGaSort:
          "an-bille-um-chomhshocraiocht-socraiochta-morgaiste-daras-an-teaghlaigh-2014",
        billYearSort: 2014,
      },
      contextDate: "2014-12-16",
    },
    {
      bill: {
        act: null,
        amendmentLists: [],
        billNo: "117",
        billType: "Public",
        billTypeURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-type/public",
        billYear: "2014",
        debates: [
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2015-03-31",
            debateSectionId: "dbsect_27",
            showAs:
              "Thirty-fourth Amendment of the Constitution (Peace and Neutrality) Bill 2014: Second Stage (Resumed) [Private Members]",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2015-03-31/debate/main",
          },
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2015-03-27",
            debateSectionId: "dbsect_4",
            showAs:
              "Thirty-fourth Amendment of the Constitution (Peace and Neutrality) Bill 2014: Second Stage [Private Members]",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2015-03-27/debate/main",
          },
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2014-12-18",
            debateSectionId: "dbsect_23",
            showAs:
              "An Bille um an gCeathrú Leasú is Tríocha ar an mBunreacht (Síocháin agus Neodracht), 2014: An Chéad Chéim",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2014-12-18/debate/main",
          },
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2014-12-18",
            debateSectionId: "dbsect_24",
            showAs:
              "Thirty-fourth Amendment of the Constitution (Peace and Neutrality) Bill 2014: First Stage",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2014-12-18/debate/main",
          },
        ],
        events: [
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2015-03-31",
                },
              ],
              eventURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-event/bill-defeated",
              showAs: "Bill Defeated",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2014/117/bill-defeated",
            },
          },
          {
            event: {
              chamber: null,
              dates: [
                {
                  date: "2014-12-18",
                },
              ],
              eventURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-event/published",
              showAs: "Published",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2014/117/published",
            },
          },
        ],
        lastUpdated: "2018-04-12T15:51:07.030000+00:00",
        longTitleEn: "Bill entitled an Act to amend the Constitution",
        longTitleGa: "Bille dá ngairtear Acht chun an Bunreacht a leasú",
        method: "Introduced",
        methodURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-method/introduced",
        mostRecentStage: {
          event: {
            chamber: {
              chamberCode: "dail",
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            dates: [
              {
                date: "2014-12-18",
              },
              {
                date: "2014-12-18",
              },
              {
                date: "2014-12-18",
              },
              {
                date: "2014-12-18",
              },
              {
                date: "2014-12-18",
              },
            ],
            house: {
              chamberCode: "dail",
              chamberType: "house",
              houseCode: "dail",
              houseNo: "31",
              showAs: "31st Dáil",
              uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/31",
            },
            progressStage: 2,
            showAs: "Second Stage",
            stageCompleted: true,
            stageOutcome: "Defeated",
            stageURI:
              "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2014/117/stage/dail/2",
          },
        },
        originHouse: {
          showAs: "Dáil Éireann",
          uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
        },
        originHouseURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
        relatedDocs: [],
        shortTitleEn:
          "Thirty-fourth Amendment of the Constitution (Peace and Neutrality) Bill 2014",
        shortTitleGa:
          "An Bille um an gCeathrú Leasú is Tríocha ar an mBunreacht (Síocháin agus Neodracht), 2014",
        source: "Private Member",
        sourceURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-source/private-member",
        sponsors: [
          {
            sponsor: {
              as: {
                showAs: null,
                uri: null,
              },
              by: {
                showAs: "Mick Wallace",
                uri: "https://data.oireachtas.ie/ie/oireachtas/member/id/Mick-Wallace.D.2011-03-09",
              },
              isPrimary: true,
            },
          },
        ],
        stages: [
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2014-12-18",
                },
              ],
              house: {
                chamberCode: "dail",
                chamberType: "house",
                houseCode: "dail",
                houseNo: "31",
                showAs: "31st Dáil",
                uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/31",
              },
              progressStage: 1,
              showAs: "First Stage",
              stageCompleted: true,
              stageOutcome: null,
              stageURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/1",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2014/117/stage/dail/1",
            },
          },
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2014-12-18",
                },
                {
                  date: "2014-12-18",
                },
                {
                  date: "2014-12-18",
                },
                {
                  date: "2014-12-18",
                },
                {
                  date: "2014-12-18",
                },
              ],
              house: {
                chamberCode: "dail",
                chamberType: "house",
                houseCode: "dail",
                houseNo: "31",
                showAs: "31st Dáil",
                uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/31",
              },
              progressStage: 2,
              showAs: "Second Stage",
              stageCompleted: true,
              stageOutcome: "Defeated",
              stageURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2014/117/stage/dail/2",
            },
          },
        ],
        status: "Defeated",
        statusURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-status/defeated",
        uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2014/117",
        versions: [
          {
            version: {
              date: "2014-12-18",
              docType: "bill",
              formats: {
                pdf: {
                  uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2014/117/eng/initiated/b11714d.pdf",
                },
                xml: null,
              },
              lang: "eng",
              showAs: "As Initiated",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2014/117/eng/initiated",
            },
          },
        ],
      },
      billSort: {
        actNoSort: null,
        actShortTitleEnSort: null,
        actShortTitleGaSort: null,
        actYearSort: null,
        billNoSort: 117,
        billShortTitleEnSort:
          "thirty-fourth-amendment-of-the-constitution-peace-and-neutrality-bill-2014",
        billShortTitleGaSort:
          "an-bille-um-an-gceathru-leasu-is-triocha-ar-an-mbunreacht-siochain-agus-neodracht-2014",
        billYearSort: 2014,
      },
      contextDate: "2014-12-18",
    },
    {
      bill: {
        act: null,
        amendmentLists: [],
        billNo: "117",
        billType: "Public",
        billTypeURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-type/public",
        billYear: "2016",
        debates: [
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2017-05-25",
            debateSectionId: "dbsect_6",
            showAs:
              "Residential Tenancies (Housing Emergency Measures in the Public Interest) (Amendment) Bill 2016: Second Stage (Resumed) [Private Members]",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2017-05-25/debate/main",
          },
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2017-05-18",
            debateSectionId: "dbsect_88",
            showAs:
              "Residential Tenancies (Housing Emergency Measures in the Public Interest) (Amendment) Bill 2016: Second Stage [Private Members]",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2017-05-18/debate/main",
          },
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2016-12-15",
            debateSectionId: "dbsect_10",
            showAs:
              "Residential Tenancies (Housing Emergency Measures in the Public Interest) (Amendment) Bill 2016: First Stage",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2016-12-15/debate/main",
          },
        ],
        events: [
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2017-05-25",
                },
              ],
              eventURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-event/bill-defeated",
              showAs: "Bill Defeated",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2016/117/bill-defeated",
            },
          },
          {
            event: {
              chamber: null,
              dates: [
                {
                  date: "2016-12-15",
                },
              ],
              eventURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-event/published",
              showAs: "Published",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2016/117/published",
            },
          },
        ],
        lastUpdated: "2018-04-12T15:51:07.030000+00:00",
        longTitleEn:
          "Bill entitled an Act to amend the Residential Tenancies Acts 2004; to lessen the effects of the housing, rental and homelessness emergency for the common good; to establish a fair rent scheme; to promote affordable rents and increased security of tenure for tenants in designated fair rent areas and to provide for related matters",
        longTitleGa:
          "Bille dá ngairtear Acht do leasú an Achta um Thionóntachtaí Cónaithe, 2004; do mhaolú éifeachtaí na héigeandála tithíochta, cíosa agus easpa dídine chun leas an phobail; do bhunú scéim cóirchíosa; do chur chun cinn cíosanna inacmhainne agus ráthaíocht tionachta mhéadaithe do thionóntaí i limistéir chóirchíosa ainmnithe agus do dhéanamh socrú i dtaobh nithe gaolmhara",
        method: "Introduced",
        methodURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-method/introduced",
        mostRecentStage: {
          event: {
            chamber: {
              chamberCode: "dail",
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            dates: [
              {
                date: "2016-12-15",
              },
              {
                date: "2016-12-15",
              },
              {
                date: "2016-12-15",
              },
              {
                date: "2016-12-15",
              },
              {
                date: "2016-12-15",
              },
            ],
            house: {
              chamberCode: "dail",
              chamberType: "house",
              houseCode: "dail",
              houseNo: "32",
              showAs: "32nd Dáil",
              uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/32",
            },
            progressStage: 2,
            showAs: "Second Stage",
            stageCompleted: true,
            stageOutcome: "Defeated",
            stageURI:
              "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2016/117/stage/dail/2",
          },
        },
        originHouse: {
          showAs: "Dáil Éireann",
          uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
        },
        originHouseURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
        relatedDocs: [],
        shortTitleEn:
          "Residential Tenancies (Housing Emergency Measures in the Public Interest) (Amendment) Bill 2016",
        shortTitleGa:
          "An Bille um Thionóntachtaí Cónaithe (Bearta Tithíochta Éigeandála ar mhaithe le Leas an Phobail) (Leasú), 2016",
        source: "Private Member",
        sourceURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-source/private-member",
        sponsors: [
          {
            sponsor: {
              as: {
                showAs: null,
                uri: null,
              },
              by: {
                showAs: "Richard Boyd Barrett",
                uri: "https://data.oireachtas.ie/ie/oireachtas/member/id/Richard-Boyd-Barrett.D.2011-03-09",
              },
              isPrimary: false,
            },
          },
          {
            sponsor: {
              as: {
                showAs: null,
                uri: null,
              },
              by: {
                showAs: "Bríd Smith",
                uri: "https://data.oireachtas.ie/ie/oireachtas/member/id/Bríd-Smith.D.2016-10-03",
              },
              isPrimary: true,
            },
          },
          {
            sponsor: {
              as: {
                showAs: null,
                uri: null,
              },
              by: {
                showAs: "Gino Kenny",
                uri: "https://data.oireachtas.ie/ie/oireachtas/member/id/Gino-Kenny.D.2016-10-03",
              },
              isPrimary: false,
            },
          },
        ],
        stages: [
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2016-12-15",
                },
              ],
              house: {
                chamberCode: "dail",
                chamberType: "house",
                houseCode: "dail",
                houseNo: "32",
                showAs: "32nd Dáil",
                uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/32",
              },
              progressStage: 1,
              showAs: "First Stage",
              stageCompleted: true,
              stageOutcome: null,
              stageURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/1",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2016/117/stage/dail/1",
            },
          },
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2016-12-15",
                },
                {
                  date: "2016-12-15",
                },
                {
                  date: "2016-12-15",
                },
                {
                  date: "2016-12-15",
                },
                {
                  date: "2016-12-15",
                },
              ],
              house: {
                chamberCode: "dail",
                chamberType: "house",
                houseCode: "dail",
                houseNo: "32",
                showAs: "32nd Dáil",
                uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/32",
              },
              progressStage: 2,
              showAs: "Second Stage",
              stageCompleted: true,
              stageOutcome: "Defeated",
              stageURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2016/117/stage/dail/2",
            },
          },
        ],
        status: "Defeated",
        statusURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-status/defeated",
        uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2016/117",
        versions: [
          {
            version: {
              date: "2016-12-15",
              docType: "bill",
              formats: {
                pdf: {
                  uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2016/117/eng/initiated/b11716d.pdf",
                },
                xml: null,
              },
              lang: "eng",
              showAs: "As Initiated",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2016/117/eng/initiated",
            },
          },
        ],
      },
      billSort: {
        actNoSort: null,
        actShortTitleEnSort: null,
        actShortTitleGaSort: null,
        actYearSort: null,
        billNoSort: 117,
        billShortTitleEnSort:
          "residential-tenancies-housing-emergency-measures-in-the-public-interest-amendment-bill-2016",
        billShortTitleGaSort:
          "an-bille-um-thionontachtai-conaithe-bearta-tithiochta-eigeandala-ar-mhaithe-le-leas-an-phobail-leasu-2016",
        billYearSort: 2016,
      },
      contextDate: "2016-12-15",
    },
    {
      bill: {
        act: null,
        amendmentLists: [],
        billNo: "116",
        billType: "Public",
        billTypeURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-type/public",
        billYear: "2016",
        debates: [
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2017-01-19",
            debateSectionId: "dbsect_5",
            showAs:
              "Anti-Evictions Bill 2016: Second Stage (Resumed) [Private Members]",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2017-01-19/debate/main",
          },
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2017-01-17",
            debateSectionId: "dbsect_31",
            showAs: "Anti-Evictions Bill 2016: Second Stage [Private Members]",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2017-01-17/debate/main",
          },
          {
            chamber: {
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            date: "2016-12-15",
            debateSectionId: "dbsect_9",
            showAs: "Anti-Evictions Bill 2016: First Stage",
            uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2016-12-15/debate/main",
          },
        ],
        events: [
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2017-01-19",
                },
              ],
              eventURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-event/bill-defeated",
              showAs: "Bill Defeated",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2016/116/bill-defeated",
            },
          },
          {
            event: {
              chamber: null,
              dates: [
                {
                  date: "2016-12-15",
                },
              ],
              eventURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-event/published",
              showAs: "Published",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2016/116/published",
            },
          },
        ],
        lastUpdated: "2018-04-12T15:51:07.030000+00:00",
        longTitleEn:
          "Bill entitled an Act to amend the Residential Tenancies Act 2004 to provide for greater security of tenure by making all tenancies over two months Part 4 tenancies, by making Part 4 tenancies of indefinite duration, removing sale of property as a ground for terminating a tenancy, providing for compensation where a tenancy is terminated on the ground that the dwelling is required by the landlord or a relative of the landlord for their own occupation, extension of notice periods for new rents and for the termination of tenancies, and inclusion of receivers and lenders that have taken possession of properties in the definition of a landlord",
        longTitleGa:
          "Bille dá ngairtear Acht do leasú an Achta um Thionóntachtaí Cónaithe, 2004 chun socrú a dhéanamh maidir le ráthaíocht tionachta níos mó trí thionóntachtaí faoi Chuid 4 a dhéanamh de gach tionóntacht os cionn dhá mhí, trí thionóntachtaí ré éiginnte a dhéanamh de thionóntachtaí faoi Chuid 4, trí dheireadh a chur le díol maoine mar fhoras le tionóntacht a fhoirceannadh, do dhéanamh socrú maidir le cúiteamh i gcás go ndéanfar tionóntacht a fhoirceannadh ar an bhforas go bhfuil an teaghais ag teastáil ón tiarna talún nó ó ghaol leis an tiarna talún lena háitiú acu féin, do dhéanamh socrú maidir le tréimhsí fógra a fhadú i leith cíosanna nua agus i leith tionóntachtaí a fhoirceannadh, agus go n-áireofar glacadóirí agus iasachtóirí a mbeidh seil/bh glactha acu ar mhaoine sa /mhíniú ar thiarna talún",
        method: "Introduced",
        methodURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-method/introduced",
        mostRecentStage: {
          event: {
            chamber: {
              chamberCode: "dail",
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            dates: [
              {
                date: "2016-12-15",
              },
              {
                date: "2016-12-15",
              },
              {
                date: "2016-12-15",
              },
              {
                date: "2016-12-15",
              },
              {
                date: "2016-12-15",
              },
            ],
            house: {
              chamberCode: "dail",
              chamberType: "house",
              houseCode: "dail",
              houseNo: "32",
              showAs: "32nd Dáil",
              uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/32",
            },
            progressStage: 2,
            showAs: "Second Stage",
            stageCompleted: true,
            stageOutcome: "Defeated",
            stageURI:
              "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2016/116/stage/dail/2",
          },
        },
        originHouse: {
          showAs: "Dáil Éireann",
          uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
        },
        originHouseURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
        relatedDocs: [],
        shortTitleEn: "Anti-Evictions Bill 2016",
        shortTitleGa: "An Bille i gcoinne Díshealbhuithe, 2016",
        source: "Private Member",
        sourceURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-source/private-member",
        sponsors: [
          {
            sponsor: {
              as: {
                showAs: null,
                uri: null,
              },
              by: {
                showAs: "Ruth Coppinger",
                uri: "https://data.oireachtas.ie/ie/oireachtas/member/id/Ruth-Coppinger.D.2014-05-23",
              },
              isPrimary: true,
            },
          },
          {
            sponsor: {
              as: {
                showAs: null,
                uri: null,
              },
              by: {
                showAs: "Mick Barry",
                uri: "https://data.oireachtas.ie/ie/oireachtas/member/id/Mick-Barry.D.2016-10-03",
              },
              isPrimary: false,
            },
          },
          {
            sponsor: {
              as: {
                showAs: null,
                uri: null,
              },
              by: {
                showAs: "Richard Boyd Barrett",
                uri: "https://data.oireachtas.ie/ie/oireachtas/member/id/Richard-Boyd-Barrett.D.2011-03-09",
              },
              isPrimary: false,
            },
          },
          {
            sponsor: {
              as: {
                showAs: null,
                uri: null,
              },
              by: {
                showAs: "Paul Murphy",
                uri: "https://data.oireachtas.ie/ie/oireachtas/member/id/Paul-Murphy.D.2014-10-10",
              },
              isPrimary: false,
            },
          },
          {
            sponsor: {
              as: {
                showAs: null,
                uri: null,
              },
              by: {
                showAs: "Bríd Smith",
                uri: "https://data.oireachtas.ie/ie/oireachtas/member/id/Bríd-Smith.D.2016-10-03",
              },
              isPrimary: false,
            },
          },
          {
            sponsor: {
              as: {
                showAs: null,
                uri: null,
              },
              by: {
                showAs: "Gino Kenny",
                uri: "https://data.oireachtas.ie/ie/oireachtas/member/id/Gino-Kenny.D.2016-10-03",
              },
              isPrimary: false,
            },
          },
        ],
        stages: [
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2016-12-15",
                },
              ],
              house: {
                chamberCode: "dail",
                chamberType: "house",
                houseCode: "dail",
                houseNo: "32",
                showAs: "32nd Dáil",
                uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/32",
              },
              progressStage: 1,
              showAs: "First Stage",
              stageCompleted: true,
              stageOutcome: null,
              stageURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/1",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2016/116/stage/dail/1",
            },
          },
          {
            event: {
              chamber: {
                chamberCode: "dail",
                showAs: "Dáil Éireann",
                uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
              },
              dates: [
                {
                  date: "2016-12-15",
                },
                {
                  date: "2016-12-15",
                },
                {
                  date: "2016-12-15",
                },
                {
                  date: "2016-12-15",
                },
                {
                  date: "2016-12-15",
                },
              ],
              house: {
                chamberCode: "dail",
                chamberType: "house",
                houseCode: "dail",
                houseNo: "32",
                showAs: "32nd Dáil",
                uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/32",
              },
              progressStage: 2,
              showAs: "Second Stage",
              stageCompleted: true,
              stageOutcome: "Defeated",
              stageURI:
                "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2016/116/stage/dail/2",
            },
          },
        ],
        status: "Defeated",
        statusURI:
          "https://data.oireachtas.ie/ie/oireachtas/def/bill-status/defeated",
        uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2016/116",
        versions: [
          {
            version: {
              date: "2016-12-15",
              docType: "bill",
              formats: {
                pdf: {
                  uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2016/116/eng/initiated/b11616d.pdf",
                },
                xml: null,
              },
              lang: "eng",
              showAs: "As Initiated",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2016/116/eng/initiated",
            },
          },
        ],
      },
      billSort: {
        actNoSort: null,
        actShortTitleEnSort: null,
        actShortTitleGaSort: null,
        actYearSort: null,
        billNoSort: 116,
        billShortTitleEnSort: "anti-evictions-bill-2016",
        billShortTitleGaSort: "an-bille-i-gcoinne-dishealbhuithe-2016",
        billYearSort: 2016,
      },
      contextDate: "2016-12-15",
    },
  ],
};
