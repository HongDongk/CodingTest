# ifnull(TLNO,'NONE') : TLNO 컬럼이 null이면 'NONE'으로 출력

SELECT PT_NAME,	PT_NO, GEND_CD,AGE, ifnull(TLNO,'NONE') as TLNO from PATIENT
where (AGE<=12) and (GEND_CD='W')
order by AGE DESC, PT_NAME