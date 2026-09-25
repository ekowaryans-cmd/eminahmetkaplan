/* ===========================================================
   LECTURE NOTES DATA
   You do not need to edit this file during the semester.

   A week appears on the website automatically as soon as its
   notes PDF is uploaded with the correct file name, e.g.
     notes/data-analytics/DA_Week01_Notes.pdf
     notes/survey-methodology/SM_Week01_Notes.pdf
   Other files of that week (code, data) appear next to it if
   they are uploaded with the names listed under "files" below.
   =========================================================== */
window.LECTURE_NOTES = {

  "data-analytics": {
    title: "Data Analytics",
    term: "Fall 2026",
    code: "1108303",
    schedule: "Mondays, 09:30-12:15",
    facts: [
      ["Course code", "1108303"],
      ["Credits", "3+0+0 · 3 credits · 5 ECTS"],
      ["Type", "Compulsory"],
      ["Class", "Mondays, 09:30-12:15 · Room D-02"],
      ["Office hours", "Mondays and Tuesdays, 13:30-14:30"]
    ],
    summary: "The path from raw data to a model-ready analytical base table: data quality checks, missing values and outliers, numerical and categorical transformations, joining tables, features from dates and text, leakage prevention and the audit of relationships between variables.",
    page: "data-analytics.html",
    folder: "notes/data-analytics/",
    prefix: "DA",
    files: [
      { suffix: "Notes", ext: "pdf", label: "Study notes" },
      { suffix: "Code",  ext: "py",  label: "Python script" },
      { suffix: "Data",  ext: "csv", label: "Dataset" },
      { suffix: "Data",  ext: "zip", label: "Data files" }
    ],
    documents: [],
    protectedNote: "Study notes (PDF) are password-protected. The password is announced in class.",
    /* Free editions published online by the authors themselves. */
    resources: [
      { title: "Feature Engineering and Selection: A Practical Approach for Predictive Models",
        authors: "Max Kuhn & Kjell Johnson",
        note: "Free online edition by the authors",
        url: "https://feat.engineering/" },
      { title: "Python for Data Analysis (3rd ed.)",
        authors: "Wes McKinney",
        note: "Free online edition by the author",
        url: "https://wesmckinney.com/book/" }
    ],
    weeks: [
      { week: 1, date: "28 September 2026",
        title: "From business problem to analytical table",
        detail: "Prediction, description and effect questions; the analytical base table (ABT); prediction subject; observation, feature and target; induction; the prediction moment (t₀) and data leakage.",
        reading: "KMD 2.1-2.4 (especially 2.4.3)" },
      { week: 2, date: "5 October 2026",
        title: "Where data come from",
        detail: "Data dictionary; unit of observation; tidy data; cross-sectional, time-series and panel structures; selection bias; databases and open data sources.",
        reading: "KMD 2.4.1-2.4.2; McKinney 6" },
      { week: 3, date: "12 October 2026",
        title: "The data quality report",
        detail: "Missing rate; cardinality; central tendency and dispersion; quartiles and IQR; Tukey outlier fences; hidden missing codes; standard error of a proportion.",
        reading: "KMD 3.1-3.3" },
      { week: 4, date: "19 October 2026",
        title: "Process and leakage",
        detail: "Train-test split; k-fold cross-validation; random, subject-based and time-based splitting; two types of leakage; class imbalance and the base rate.",
        reading: "KMD 9.3, 9.4.1; PF Ch. 5" },
      { week: 5, date: "26 October 2026",
        title: "Missing data",
        detail: "Missingness mechanisms; complete-case analysis; mean and median imputation; the effect of imputation on variance (algebraic derivation); missingness indicator; structural missingness.",
        reading: "KMD 3.4.1; FES 8" },
      { week: 6, date: "2 November 2026",
        title: "Numerical transformations",
        detail: "Min-max scaling; z-score standardisation; clipping; the Box-Cox family and the log transformation; Euclidean distance and the effect of scale on distance.",
        reading: "KMD 3.6.1; FES 6" },
      { week: 7, date: "9 November 2026",
        title: "Review and problem solving",
        detail: "Rule card; formula card; twelve solved problems on an end-to-end workflow; midterm question pool.",
        reading: "Notes for Weeks 1-6" },
      { week: 9, date: "23 November 2026",
        title: "Categorical variables",
        detail: "Indicator (dummy) variables and the k-1 rule; ordinal encoding; the alphabetical order trap; merging rare categories; unseen categories and column alignment.",
        reading: "FES 5" },
      { week: 10, date: "30 November 2026",
        title: "Joining tables",
        detail: "Matching the unit of observation; summarising with groupby; left and inner joins; row explosion; key mismatch; join checks (indicator, validate).",
        reading: "McKinney 8" },
      { week: 11, date: "7 December 2026",
        title: "Dates and text",
        detail: "Conversion to date type and format strings; date parts and day of the week; duration between two dates; time window checks; text cleaning; keyword indicators.",
        reading: "McKinney 11.1-11.3, 7.4; FES 5.6" },
      { week: 12, date: "14 December 2026",
        title: "Workshop: an end-to-end ABT from raw tables",
        detail: "Twelve stations covering the correct order of windowing, summarising, joining, splitting, clipping, scaling and encoding; the same workflow on a 3,000-customer dataset.",
        reading: "FES 3" },
      { week: 13, date: "21 December 2026",
        title: "Relationships between variables",
        detail: "Pearson correlation; twin columns and multicollinearity; VIF and standard error inflation; proxy columns; intervention columns and endogeneity; interaction and polynomial terms.",
        reading: "Gujarati & Porter, multicollinearity chapter; FES 6" },
      { week: 14, date: "28 December 2026",
        title: "Feature selection and semester synthesis",
        detail: "Filter methods; noise threshold; multiple comparisons and the Bonferroni correction; overfitting; the seven-step relationship audit; final exam guide.",
        reading: "FES 10-11; PF Ch. 5" }
    ]
  },

  "survey-methodology": {
    title: "Survey Methodology",
    term: "Fall 2026",
    code: "1108308",
    schedule: "Tuesdays, 10:30",
    facts: [
      ["Course code", "1108308"],
      ["Credits", "2+0+0 · 2 credits · 3 ECTS"],
      ["Type", "Elective"],
      ["Class", "Tuesdays, 10:30"],
      ["Office hours", "Mondays and Tuesdays, 13:30-14:30"]
    ],
    summary: "The full cycle of a survey study: questionnaire design, levels of measurement, sampling, reliability and validity, parametric and nonparametric tests, and the analysis and reporting of findings in jamovi, with SPSS demonstrated and a ready-made Python script provided.",
    page: "survey-methodology.html",
    folder: "notes/survey-methodology/",
    prefix: "SM",
    files: [
      { suffix: "Notes", ext: "pdf",  label: "Study notes" },
      { suffix: "Data",  ext: "csv",  label: "Dataset" },
      { suffix: "Data",  ext: "omv",  label: "jamovi file" },
      { suffix: "Data",  ext: "xlsx", label: "Excel file" },
      { suffix: "Code",  ext: "py",   label: "Python script" }
    ],
    /* Course-wide documents: shown only after they are uploaded. */
    documents: [
      { file: "SM_Report_Template.docx", label: "Research report template" },
      { file: "SM_Sample_Report.pdf",    label: "Sample report" },
      { file: "SM_Survey_Forms.pdf",     label: "Survey forms" },
      { file: "SM_Analysis_Script.py",   label: "Analysis script (Python)" }
    ],
    weeks: [
      { week: 1, date: "29 September 2026",
        title: "The logic of survey research",
        detail: "Population, sample and measurement instrument; total survey error: coverage, sampling, nonresponse and measurement error." },
      { week: 2, date: "6 October 2026",
        title: "Writing questions",
        detail: "Leading wording, double-barrelled questions, recall problems, social desirability; Likert-type and other scale types." },
      { week: 3, date: "13 October 2026",
        title: "Levels of measurement and data preparation",
        detail: "Nominal, ordinal, interval and ratio levels; preparing data for analysis: coding, reverse-scoring items, computing dimension scores." },
      { week: 4, date: "20 October 2026",
        title: "Sampling methods",
        detail: "Probability and non-probability approaches; determining sample size; nonresponse and the calculation of the response rate." },
      { week: 5, date: "27 October 2026",
        title: "Reliability and validity",
        detail: "Cronbach's alpha, item-total correlation, item analysis; scale structure and a conceptual introduction to exploratory factor analysis." },
      { week: 6, date: "3 November 2026",
        title: "Parametric tests and their assumptions",
        detail: "Normality and homogeneity of variance; independent-samples t test, analysis of variance, Pearson correlation, effect size." },
      { week: 7, date: "10 November 2026",
        title: "Nonparametric tests and test selection",
        detail: "Mann-Whitney U, Kruskal-Wallis H, Wilcoxon, Spearman; chi-square test of independence; test selection and general review." },
      { week: 9, date: "24 November 2026",
        title: "Data screening and reliability analysis in software",
        detail: "Getting to know the data, reverse coding and reliability analysis in a software environment." },
      { week: 10, date: "1 December 2026",
        title: "Descriptive statistics",
        detail: "Computing descriptive statistics; frequency distributions and their presentation in graphs." },
      { week: 11, date: "8 December 2026",
        title: "Assumption checks and test selection",
        detail: "Applying assumption checks and justifying the choice of test; introduction to the SPSS environment." },
      { week: 12, date: "15 December 2026",
        title: "Hypothesis testing in practice",
        detail: "Applying hypothesis tests, computing effect sizes and preparing results tables." },
      { week: 13, date: "22 December 2026",
        title: "Interpretation and discussion",
        detail: "Interpreting findings and writing the discussion section; peer review of draft reports." },
      { week: 14, date: "29 December 2026",
        title: "Presentation of findings",
        detail: "Presenting research findings and overall evaluation." }
    ]
  }

};
