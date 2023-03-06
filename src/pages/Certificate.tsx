import { Button, Card, Divider, Select, Space, Statistic, Tabs, Tag } from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import { Grade } from "./components/Grade";
import { ArrowUpOutlined, CheckCircleOutlined, ArrowDownOutlined, PlusOutlined } from "@ant-design/icons";
import { Navigate, useParams } from "react-router";
import { useGetCertificate } from "../util/hooks/useGetCertificate";
import { addGrade } from "../util/services/gradeService";
import { useGetAuth } from "../util/hooks/useGetAuth";
import { useGetBestSubject } from "../util/hooks/useGetBestSubject";
import { useGetWorstSubject } from "../util/hooks/useGetWorstSubject";
import { useGetOrderedSubjects } from "../util/hooks/useGetOrderedSubjects";
import { useGetCertificateAverage } from "../util/hooks/useGetCertificateAverage";
import { useGetImprovement } from "../util/hooks/useGetImprovement";

export const Certificates = () => {
  const [comparisonId, setComparisonId] = useState(-1);
  const { id } = useParams();
  const { student } = useGetAuth();
  const { certificate, invalidateCertificate, isLoading } = useGetCertificate(parseInt(id as string));
  const { bestSubject, invalidateBestSubject } = useGetBestSubject(parseInt(id as string));
  const { worstSubject, invalidateWorstSubject } = useGetWorstSubject(parseInt(id as string));
  const { orderedSubjects, invalidateOrderedSubjects } = useGetOrderedSubjects(parseInt(id as string));
  const { certificateAverage, invalidateCertificateAverage } = useGetCertificateAverage(parseInt(id as string));
  const { improvement, invalidateImprovement } = useGetImprovement(parseInt(id as string), comparisonId);

  const invalidate = () => {
    invalidateCertificate();
    invalidateBestSubject();
    invalidateWorstSubject();
    invalidateOrderedSubjects();
    invalidateCertificateAverage();
    invalidateImprovement();
  };

  if (isLoading) return <></>;
  if (!certificate || !student) return <Navigate to="/" />;

  const cascaderOptions = student.certificates
    .filter((r) => r.id !== certificate.id)
    .map((certificate) => ({ value: `${certificate.id}certificate`, label: certificate.name }));

  const items = [
    {
      label: "Übersicht",
      key: `0`,
      children: (
        <div style={{ paddingTop: "1%" }}>
          <Space style={{ width: "100%" }} direction="vertical">
            <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Space align="center" style={{ width: "65em" }} size={"large"} direction="vertical">
                <Title style={{ fontSize: "2.7em" }} level={1}>
                  Ø {certificateAverage?.toFixed(2)} Punkte
                </Title>
                <Select
                  onChange={(v) => setComparisonId(parseInt(v[0].toString().replace("certificate", "")))}
                  placeholder="Zeugnis vergleichen"
                  options={cascaderOptions}
                />
                <Card style={{ width: "250px" }}>
                  {(improvement ? improvement : 0) >= 0 ? (
                    <Statistic
                      title="Verbesserung"
                      value={improvement ?? 0}
                      precision={2}
                      valueStyle={{ color: "#3f8600" }}
                      prefix={<ArrowUpOutlined />}
                      suffix="%"
                    />
                  ) : (
                    <Statistic
                      title="Abnahme"
                      value={improvement ? Math.sqrt(improvement * improvement) : 0}
                      precision={2}
                      valueStyle={{ color: "#cf1322" }}
                      prefix={<ArrowDownOutlined />}
                      suffix="%"
                    />
                  )}
                </Card>
              </Space>
              <Space style={{ width: "65em" }} align="center" direction="vertical">
                <Card style={{ width: "25em" }} title="Höchster Durchschnitt">
                  <h3>Fach: {bestSubject?.subjectName}</h3>
                  <h3>Gesamtnote: {bestSubject?.average.toFixed(2)} Punkte</h3>
                </Card>
                <Card style={{ width: "25em" }} title="Niedrigster Durchschnitt">
                  <h3>Fach: {worstSubject?.subjectName}</h3>
                  <h3>Gesamtnote: {worstSubject?.average.toFixed(2)} Punkte</h3>
                </Card>
              </Space>
            </div>
            <Divider />
            <Space wrap direction="horizontal" align="center">
              {orderedSubjects?.map((subject) => (
                <Card style={{ minWidth: "240px" }} title={subject.subjectName}>
                  <h3>Gesamtnote: {subject.average.toFixed(2)} Punkte</h3>
                  {subject.major ? (
                    subject.average >= 5 ? (
                      <Tag style={{ marginTop: "4%" }} icon={<CheckCircleOutlined />} color="success">
                        Bestanden!
                      </Tag>
                    ) : (
                      <Tag style={{ marginTop: "4%" }} icon={<CheckCircleOutlined />} color="error">
                        Nicht bestanden!
                      </Tag>
                    )
                  ) : subject.average >= 4 ? (
                    <Tag style={{ marginTop: "4%" }} icon={<CheckCircleOutlined />} color="success">
                      Bestanden!
                    </Tag>
                  ) : (
                    <Tag style={{ marginTop: "4%" }} icon={<CheckCircleOutlined />} color="error">
                      Nicht bestanden!
                    </Tag>
                  )}
                  <h5 style={{ fontSize: "0.8em", marginTop: "1.2em", marginBottom: "-1em" }}>{subject.major ? "Leistungskurs" : "Grundkurs"}</h5>
                </Card>
              ))}
            </Space>
          </Space>
        </div>
      ),
    },
    ...certificate.subjects.map((subject) => ({
      label: subject.name,
      key: `${subject.id}`,
      children: (
        <Space align="start" direction="vertical">
          <Title level={3}>Klausuren</Title>
          <Space wrap direction="horizontal" size={"large"}>
            {subject.grades
              .filter((v) => v.classTest)
              .map((grade) => (
                <Grade invalidate={invalidate} id={grade.id} title={grade.title} grade={grade.grade} date={grade.date} />
              ))}
            <Button
              onClick={() => {
                addGrade(subject.id, true).then(() => {
                  invalidate();
                });
              }}
              style={{ marginLeft: "1em" }}
              size="large"
              icon={<PlusOutlined />}
              type="primary"
              shape="circle"
            />
          </Space>
          <Divider />
          <Title level={3}>Nebenleistungen</Title>
          <Space wrap direction="horizontal" size={"large"}>
            {subject.grades
              .filter((v) => !v.classTest)
              .map((grade) => (
                <Grade invalidate={invalidate} id={grade.id} title={grade.title} grade={grade.grade} date={grade.date} />
              ))}
            <Button
              onClick={() => {
                addGrade(subject.id, false);
                invalidate();
              }}
              style={{ marginLeft: "1em" }}
              size="large"
              icon={<PlusOutlined />}
              type="primary"
              shape="circle"
            />
          </Space>
        </Space>
      ),
    })),
  ];

  return (
    <div style={{ padding: "3%", height: "100%", width: "100%", backgroundColor: "white" }}>
      <h2 style={{ display: "flex" }}>{certificate.name}</h2>
      <Tabs items={items} style={{ minHeight: "400px" }} defaultActiveKey="0" onChange={() => {}} />
    </div>
  );
};
