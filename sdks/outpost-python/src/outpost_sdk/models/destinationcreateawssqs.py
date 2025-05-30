"""Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT."""

from __future__ import annotations
from .awssqsconfig import AWSSQSConfig, AWSSQSConfigTypedDict
from .awssqscredentials import AWSSQSCredentials, AWSSQSCredentialsTypedDict
from .topics_union import TopicsUnion, TopicsUnionTypedDict
from enum import Enum
from outpost_sdk.types import BaseModel
from typing import Optional
from typing_extensions import NotRequired, TypedDict


class DestinationCreateAWSSQSType(str, Enum):
    r"""Type of the destination. Must be 'aws_sqs'."""

    AWS_SQS = "aws_sqs"


class DestinationCreateAWSSQSTypedDict(TypedDict):
    type: DestinationCreateAWSSQSType
    r"""Type of the destination. Must be 'aws_sqs'."""
    topics: TopicsUnionTypedDict
    r"""\"*\" or an array of enabled topics."""
    config: AWSSQSConfigTypedDict
    credentials: AWSSQSCredentialsTypedDict
    id: NotRequired[str]
    r"""Optional user-provided ID. A UUID will be generated if empty."""


class DestinationCreateAWSSQS(BaseModel):
    type: DestinationCreateAWSSQSType
    r"""Type of the destination. Must be 'aws_sqs'."""

    topics: TopicsUnion
    r"""\"*\" or an array of enabled topics."""

    config: AWSSQSConfig

    credentials: AWSSQSCredentials

    id: Optional[str] = None
    r"""Optional user-provided ID. A UUID will be generated if empty."""
