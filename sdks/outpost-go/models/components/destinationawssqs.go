// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"encoding/json"
	"fmt"
	"github.com/hookdeck/outpost/sdks/outpost-go/internal/utils"
	"time"
)

// DestinationAWSSQSType - Type of the destination.
type DestinationAWSSQSType string

const (
	DestinationAWSSQSTypeAwsSqs DestinationAWSSQSType = "aws_sqs"
)

func (e DestinationAWSSQSType) ToPointer() *DestinationAWSSQSType {
	return &e
}
func (e *DestinationAWSSQSType) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "aws_sqs":
		*e = DestinationAWSSQSType(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DestinationAWSSQSType: %v", v)
	}
}

type DestinationAWSSQS struct {
	// Control plane generated ID or user provided ID for the destination.
	ID string `json:"id"`
	// Type of the destination.
	Type DestinationAWSSQSType `json:"type"`
	// "*" or an array of enabled topics.
	Topics Topics `json:"topics"`
	// ISO Date when the destination was disabled, or null if enabled.
	DisabledAt *time.Time `json:"disabled_at"`
	// ISO Date when the destination was created.
	CreatedAt   time.Time         `json:"created_at"`
	Config      AWSSQSConfig      `json:"config"`
	Credentials AWSSQSCredentials `json:"credentials"`
	// A human-readable representation of the destination target (SQS queue name). Read-only.
	Target *string `json:"target,omitempty"`
	// A URL link to the destination target (AWS Console link to the queue). Read-only.
	TargetURL *string `json:"target_url,omitempty"`
}

func (d DestinationAWSSQS) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(d, "", false)
}

func (d *DestinationAWSSQS) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &d, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *DestinationAWSSQS) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *DestinationAWSSQS) GetType() DestinationAWSSQSType {
	if o == nil {
		return DestinationAWSSQSType("")
	}
	return o.Type
}

func (o *DestinationAWSSQS) GetTopics() Topics {
	if o == nil {
		return Topics{}
	}
	return o.Topics
}

func (o *DestinationAWSSQS) GetDisabledAt() *time.Time {
	if o == nil {
		return nil
	}
	return o.DisabledAt
}

func (o *DestinationAWSSQS) GetCreatedAt() time.Time {
	if o == nil {
		return time.Time{}
	}
	return o.CreatedAt
}

func (o *DestinationAWSSQS) GetConfig() AWSSQSConfig {
	if o == nil {
		return AWSSQSConfig{}
	}
	return o.Config
}

func (o *DestinationAWSSQS) GetCredentials() AWSSQSCredentials {
	if o == nil {
		return AWSSQSCredentials{}
	}
	return o.Credentials
}

func (o *DestinationAWSSQS) GetTarget() *string {
	if o == nil {
		return nil
	}
	return o.Target
}

func (o *DestinationAWSSQS) GetTargetURL() *string {
	if o == nil {
		return nil
	}
	return o.TargetURL
}
