# ROUND(값, a자릿수) : 소숫점 아래 a자릿수까지 반올림하여 표시
# AVG(DAILY_FEE) : DAILY_FEE 평균값

SELECT ROUND(AVG(DAILY_FEE), 0) AS AVERAGE_FEE 
FROM CAR_RENTAL_COMPANY_CAR
WHERE CAR_TYPE = 'SUV'